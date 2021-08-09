package com.chenxi.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

	@RequestMapping("/")
	public String index(HttpSession session) {
		if(session.getAttribute("count")==null) {
			session.setAttribute("count", 0);
		}else {
			Integer count = (int)session.getAttribute("count")+1;
			session.setAttribute("count", count);
		}
		return "index.jsp";
	}
	
	@RequestMapping("/counter")
	public String count(HttpSession session) {
		if(session.getAttribute("count")==null) {
			return "redirect:/";
		}
		return "count.jsp";
	}
	
	@RequestMapping("/new")
	public String newSession(HttpSession session) {
		if(session.getAttribute("count")!=null) {
			session.removeAttribute("count");
		}
		return "redirect:/";
	}
	
}
