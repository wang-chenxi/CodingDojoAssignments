package com.chenxi.ninjagoldgame.controllers;

import java.time.LocalDateTime; // Import the LocalDateTime class
import java.time.format.DateTimeFormatter; // Import the DateTimeFormatter class
import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import sun.util.logging.resources.logging;

import java.util.List;


@Controller
public class MainController {

	@RequestMapping("/")
	public String game(HttpSession httpSession) {
		if(httpSession.getAttribute("gold") == null) {
			httpSession.setAttribute("gold", 0);
			httpSession.setAttribute("count", 0);
			List<String> log = new ArrayList<String>();
			log.add("Game start");
			httpSession.setAttribute("log",log);
		}
		int gold = (int)httpSession.getAttribute("gold");
		if(gold <0) {
			return "redirect:/prison";
		}
		return "index.jsp";
	}
	
	@PostMapping("/process_money")
	public String money(@RequestParam(value="building") String building,HttpSession httpSession) {
		int earn = 0;
		if(building.equals("farm")) {
			earn = (int)(Math.random() * 10) + 10;
		}else if(building.equals("cave")){
			earn = (int)(Math.random() * 5) + 5;
		}else if(building.equals("house")) {
			earn = (int)(Math.random() * 3) + 2;
		}else {
			earn = (int)(Math.random() * 100) - 50;
		}
		LocalDateTime myDateObj = LocalDateTime.now();
		DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
	    String formattedDate = myDateObj.format(myFormatObj);
		int gold = (int)httpSession.getAttribute("gold");
		if(gold +earn <0) {
			return "redirect:/prison";
		}
		Object log = httpSession.getAttribute("log");
		((List<String>) log).add("You entered " + building + ", earned " + earn + " gold. " +formattedDate);
		int count = (int)httpSession.getAttribute("count")+1;
		httpSession.setAttribute("gold", earn + gold);
		httpSession.setAttribute("log", log);
		httpSession.setAttribute("count", count);
		return "redirect:/";
	}
	
	@PostMapping("/reset")
	public String reset(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
	
	@RequestMapping("/prison")
	public String prison() {
		return "prison.jsp";
	}
	
}
