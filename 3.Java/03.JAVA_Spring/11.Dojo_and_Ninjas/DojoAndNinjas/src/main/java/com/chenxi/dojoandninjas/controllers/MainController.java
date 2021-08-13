package com.chenxi.dojoandninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.chenxi.dojoandninjas.models.Dojo;
import com.chenxi.dojoandninjas.models.Ninja;
import com.chenxi.dojoandninjas.services.MainService;

@Controller
public class MainController {
	
	@Autowired
	private MainService service;

	@GetMapping("/dojos/new")
	public String newDojo(@ModelAttribute("newDojo") Dojo emptyDojo ) {
		return "new_dojo.jsp";
	}
	
	@PostMapping("/dojos/new")
	public String addDojo(@Valid @ModelAttribute("newDojo")Dojo filleDojo, BindingResult result) {
		if(result.hasErrors()) {
			return "new_dojo.jsp";
		}else {
			this.service.save(filleDojo);
			return "redirect:/dojos/new";
		}
	}
	
	@GetMapping("/ninjas/new")
	public String newNinja(@ModelAttribute("newNinja")Ninja emptyNinja, Model model) {
		List<Dojo> dojos = this.service.findAll();
		model.addAttribute("dojos",dojos);
		return "new_ninja.jsp";
	}
	
	@PostMapping("/ninjas/new")
	public String addNinja(@Valid @ModelAttribute("newNinja") Ninja filleNinja, BindingResult result, Model model) {
		if(result.hasErrors()) {
			List<Dojo> dojos = this.service.findAll();
			model.addAttribute("dojos",dojos);
			return "new_ninja.jsp";
		}else {
			this.service.saveNinja(filleNinja);
			return "redirect:/ninjas/new";
		}

	}
	
	@GetMapping("/dojos/{id}")
	public String showDojo(@PathVariable("id") Long id, Model model) {
		Dojo dojo = this.service.findDojoById(id);
		model.addAttribute("dojo",dojo);
		return "dojo_show.jsp";
	}
	
	
}
