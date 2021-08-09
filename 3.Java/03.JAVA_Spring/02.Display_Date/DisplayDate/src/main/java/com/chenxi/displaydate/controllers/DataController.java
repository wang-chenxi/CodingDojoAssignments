package com.chenxi.displaydate.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.Date;
import java.text.SimpleDateFormat;

@Controller
public class DataController {
	
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
	

	@RequestMapping("/date")
	public String date(Model model) {
		String pattern = "MM-dd-yyyy";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		String date = simpleDateFormat.format(new Date());
		model.addAttribute("date",date);
		return "date.jsp";
	}
	
	@RequestMapping("/time")
	public String time(Model model) {
		String pattern = " HH:mm:ss";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		String time = simpleDateFormat.format(new Date());
		model.addAttribute("time",time);
		return "time.jsp";
	}
	
}
