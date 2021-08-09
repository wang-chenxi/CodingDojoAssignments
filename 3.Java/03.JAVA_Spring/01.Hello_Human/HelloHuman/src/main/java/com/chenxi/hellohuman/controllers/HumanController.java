package com.chenxi.hellohuman.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HumanController {

	@RequestMapping("/")
	public String human() {
		return "index.jsp";
	}
	
}
