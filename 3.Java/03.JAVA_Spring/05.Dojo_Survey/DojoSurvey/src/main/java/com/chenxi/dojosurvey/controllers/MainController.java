package com.chenxi.dojosurvey.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

	@RequestMapping("/")
	public String form() {
		return "form.jsp";
	}
	
	@PostMapping("/process")
	public String submit(
			@RequestParam(value = "name")String name, 
			@RequestParam(value = "location") String location, 
			@RequestParam(value="language") String language, 
			@RequestParam(value="comment", required=false) String comment,
			HttpSession session) {
		session.setAttribute("name", name);
		session.setAttribute("location", location);
		session.setAttribute("language", language);
		if(!comment.isBlank()) {
			session.setAttribute("comment", comment);
		}
		return "redirect:/result";
	}
	
	@RequestMapping("/result")
	public String result(){
		return "result.jsp";
	}
	
}
