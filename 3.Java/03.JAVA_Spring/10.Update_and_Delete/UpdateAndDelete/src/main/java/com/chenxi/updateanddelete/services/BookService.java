package com.chenxi.updateanddelete.services;

import java.util.List;
import org.springframework.stereotype.Service;
import com.chenxi.updateanddelete.models.Book;
import com.chenxi.updateanddelete.repositories.BookRepository;

@Service
public class BookService {

	private final BookRepository bookRepository;
	
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	
	public Book updateBook(Long id, String title, String desc, String lang, Integer numofPages) {
		Book book = this.bookRepository.findById(id).orElse(null);
		book.setDescription(desc);
		book.setLanguage(lang);
		book.setTitle(title);
		book.setNumberOfPages(numofPages);
		return this.bookRepository.save(book);
	}
	
	public void deleteBook(Long id) {
		this.bookRepository.deleteById(id);
		return; 
	}
}
