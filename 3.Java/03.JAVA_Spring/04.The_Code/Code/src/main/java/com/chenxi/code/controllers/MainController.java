package com.chenxi.code.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class MainController {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	@PostMapping("/process")
	public String catchCode(RedirectAttributes redirectAttributes, @RequestParam(value="code") String code) {
	System.out.println(code);
		if(code.equals("bushido")) {
		return "redirect:/code";
	}else {
		redirectAttributes.addFlashAttribute("message","You must train harder!");
		return "redirect:/";
	}
	}
	
	@RequestMapping("/code")
	public String code() {
		return "code.jsp";
	}
	
}
