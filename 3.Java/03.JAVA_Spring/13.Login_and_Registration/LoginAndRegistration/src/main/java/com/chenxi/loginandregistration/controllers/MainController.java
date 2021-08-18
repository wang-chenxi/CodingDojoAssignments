package com.chenxi.loginandregistration.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.chenxi.loginandregistration.models.User;
import com.chenxi.loginandregistration.services.MainService;
import com.chenxi.loginandregistration.validators.UserValidator;


@Controller
public class MainController {

	
	@Autowired
	private MainService service;
	
	@Autowired
	private UserValidator validator;
	
	@GetMapping("/")
	public String index(@ModelAttribute("user") User emptyuser, HttpSession session) {
		if(session.getAttribute("user_id") != null) {
			return "redirect:/dashboard";
		}
		return "index.jsp";
	}
	
	@PostMapping("/registration")
	public String registration(@Valid @ModelAttribute("user")User filledUser,BindingResult result,HttpSession session) {
		validator.validate(filledUser, result);
		if(result.hasErrors()) {
			return "index.jsp";
		}
		User user = this.service.register(filledUser);
		session.setAttribute("user_id", user.getId());
		return "redirect:/dashboard";
	}
	
	@PostMapping("/login")
	public String login(@RequestParam("email") String email, @RequestParam("password") String password, 
    		Model model, 
    		HttpSession session,
    		RedirectAttributes flashMessages) {
		
		if(!service.loginAuth(email, password)) {
			flashMessages.addFlashAttribute("error", "INVALID LOGIN");
    		return "redirect:/";
		}
		User user = this.service.findByEmail(email);
		session.setAttribute("user_id", user.getId());
		return "redirect:/dashboard";
	}
	
	@GetMapping("/dashboard")
	public String dashboard() {
		return "dashboard.jsp";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.setAttribute("user_id", null);
		return "redirect:/";
	}

	
}
