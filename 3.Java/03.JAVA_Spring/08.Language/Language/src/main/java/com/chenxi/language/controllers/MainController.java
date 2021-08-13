package com.chenxi.language.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.chenxi.language.services.LanguageService;



@Controller
public class MainController {
	
	@Autowired
	private LanguageService languageService;

	@GetMapping("/languages")
	public String all(Model model, @ModelAttribute("newLanguage") Language emptylanguage) {
		List<Language> allLanguages = this.languageService.findAllLanguage();
		model.addAttribute("languages", allLanguages);
		return "index.jsp";
	}
	
	@PostMapping("/languages/process")
	public String add(@Valid @ModelAttribute("newLanguage") Language filledlanguage, BindingResult result, Model model) {
		if(result.hasErrors()) {
			List<Language> allLanguages = this.languageService.findAllLanguage();
			model.addAttribute("languages", allLanguages);
			return "index.jsp";
		}else {
			this.languageService.save(filledlanguage);
			return "redirect:/languages";
		}
	}
	
	@GetMapping("/languages/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Language language = this.languageService.findById(id);
		model.addAttribute("language",language);
		return "show.jsp";
	}
	
	@GetMapping("/languages/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Language language = this.languageService.findById(id);
		model.addAttribute(language);
		return "edit.jsp";
	}
	
	@PutMapping("/languages/edit/{id}")
	public String update(@PathVariable("id") Long id, @Valid @ModelAttribute("language") Language language,BindingResult result) {
		// find the book
		if(result.hasErrors()) {
			return "edit.jsp";
		}else {
			this.languageService.save(language);
			return "redirect:/languages/{id}";
		}
	}
	
	@GetMapping("/languages/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
		// delete the language
		this.languageService.delete(id);
		return "redirect:/languages";
	}
	
	
}
