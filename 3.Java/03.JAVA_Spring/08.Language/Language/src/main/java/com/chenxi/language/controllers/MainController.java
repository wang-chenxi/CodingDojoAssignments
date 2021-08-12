package com.chenxi.language.controllers;

import javax.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.chenxi.language.models.Language;



@Controller
public class MainController {

	@GetMapping("/languages")
	public String all(Model model, @ModelAttribute("newLanguage") Language language) {
		
		return "index.jsp";
	}
	
	@PostMapping("/languages/process")
	public String add(@Valid @ModelAttribute("newLanguage") Language language, BindingResult result) {
		if(result.hasErrors()) {
			return "index.jsp";
		}else {
			
			return "redirect:/languages";
		}
	}
	
	@GetMapping("/languages/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		return "show.jsp";
	}
	
	@GetMapping("/languages/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		return "edit.jsp";
	}
	
	@PutMapping("/languages/edit/{id}")
	public String update(@PathVariable("id") Long id, @Valid @ModelAttribute("language") Language language,BindingResult result) {
		// find the book
		if(result.hasErrors()) {
			return "edit.jsp";
		}else {
			
			return "redirect:/languages/{id}";
		}
	}
	
	@DeleteMapping("/languages/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
		// delete the book
		
		return "index.jsp";
	}
	
	
}
