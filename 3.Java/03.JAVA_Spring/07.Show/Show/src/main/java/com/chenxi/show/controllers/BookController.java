package com.chenxi.show.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.chenxi.show.models.Book;
import com.chenxi.show.services.BookService;

@Controller
public class BookController {
	
	private BookService bookService;
	public BookController(BookService bookService) {
		this.bookService = bookService;
	}

	@GetMapping("/books/{id}")
	public String show(@PathVariable long id, Model model) {
		Book book = this.bookService.findBook(id);
		model.addAttribute("book", book);
		return "books/show.jsp";
	}
	
	
}
