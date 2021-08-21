package com.chenxi.eventsbeltreviewer.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.chenxi.eventsbeltreviewer.models.User;
import com.chenxi.eventsbeltreviewer.models.Event;
import com.chenxi.eventsbeltreviewer.models.Message;
import com.chenxi.eventsbeltreviewer.models.State;
import com.chenxi.eventsbeltreviewer.services.MainService;
import com.chenxi.eventsbeltreviewer.validators.UserValidator;

@Controller
public class MainController {

	@Autowired
	private MainService service;

	@Autowired
	private UserValidator validator;

	@GetMapping("/")
	public String index(@ModelAttribute("user") User emptyuser, HttpSession session, Model model) {
		if (session.getAttribute("user_id") != null) {
			return "redirect:/events";
		}
		List<State> states = this.service.findAllStates();
		model.addAttribute("states", states);
		return "index.jsp";
	}

	@PostMapping("/registration")
	public String registration(@Valid @ModelAttribute("user") User filledUser, BindingResult result,
			HttpSession session, Model model) {
		validator.validate(filledUser, result);
		if (result.hasErrors()) {
			List<State> states = this.service.findAllStates();
			model.addAttribute("states", states);
			return "index.jsp";
		}
		User user = this.service.register(filledUser);
		session.setAttribute("user_id", user.getId());
		return "redirect:/events";
	}

	@PostMapping("/login")
	public String login(@RequestParam("email") String email, @RequestParam("password") String password, Model model,
			HttpSession session, RedirectAttributes flashMessages) {

		if (!service.loginAuth(email, password)) {
			flashMessages.addFlashAttribute("error", "INVALID LOGIN");
			return "redirect:/";
		}
		User user = this.service.findByEmail(email);
		session.setAttribute("user_id", user.getId());
		return "redirect:/events";
	}

	// dashboard
	@GetMapping("/events")
	public String dashboard(HttpSession session, Model model, @ModelAttribute("event") Event emptyEvent) {
		if (session.getAttribute("user_id") == null) {
			return "redirect:/";
		}
		User user = this.service.findUserById((Long) session.getAttribute("user_id"));
		model.addAttribute("user", user);
		List<State> states = this.service.findAllStates();
		model.addAttribute("states", states);
		// show events
		List<Event> events = this.service.allEvents();
		for (Event event : events) {
			System.out.println(event.getName());
		}
		model.addAttribute("events", events);
		return "dashboard.jsp";
	}

	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.setAttribute("user_id", null);
		return "redirect:/";
	}

	@PostMapping("/events")
	public String createEvent(@Valid @ModelAttribute("event") Event filledEvent, BindingResult result,
			HttpSession session, Model model) {
		if (result.hasErrors()) {
			User user = this.service.findUserById((Long) session.getAttribute("user_id"));
			model.addAttribute("user", user);
			List<State> states = this.service.findAllStates();
			model.addAttribute("states", states);
			// show events
			List<Event> events = this.service.allEvents();
			for (Event event : events) {
				System.out.println(event.getName());
			}
			model.addAttribute("events", events);
			return "dashboard.jsp";
		}
		service.createEvent(filledEvent);
		return "redirect:/events";
	}

	// user join event
	@GetMapping("/events/{event_id}/{attendee_id}")
	public String RSVP(@PathVariable("event_id") Long event_id, @PathVariable("attendee_id") Long attendee_id) {
		service.addAttendee(event_id, attendee_id);
		return "redirect:/events";
	}

	// user cancel rsvp
	@GetMapping("/events/cancel/{event_id}/{attendee_id}")
	public String cancelRSVP(@PathVariable("event_id") Long event_id, @PathVariable("attendee_id") Long attendee_id) {
		service.removeAttendee(event_id, attendee_id);
		return "redirect:/events";
	}

	// edit event
	@GetMapping("/events/{event_id}/edit")
	public String editEvent(HttpSession session, @PathVariable("event_id") Long event_id, Model model) {
		if (session.getAttribute("user_id") == null) {
			return "redirect:/";
		}
		Event event = this.service.findEventById(event_id);
		Long user_id = (Long) session.getAttribute("user_id");
		// long is an object so it cannot use "==" directly
		if (!event.getHost().getId().equals(user_id)) {
			System.out.println(event.getHost().getId());
			System.out.println(user_id);
			System.out.println("they are not equal");
			return "redirect:/events";
		}
		model.addAttribute("event", event);
		List<State> states = this.service.findAllStates();
		model.addAttribute("states", states);
		return "eventEdit.jsp";
	}

	@PutMapping("/events/{event_id}/edit")
	public String update(@PathVariable("event_id") Long id, @Valid @ModelAttribute("event") Event event,
			BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<State> states = this.service.findAllStates();
			model.addAttribute("states", states);
			return "eventEdit.jsp";
		} else {
			this.service.updateEvent(id, event);
			return "redirect:/events";
		}
	}

	// delete event
	@GetMapping("/events/{event_id}/delete")
	public String deleteEvent(@PathVariable("event_id") Long id, HttpSession session) {
		// user not log in
		if (session.getAttribute("user_id") == null) {
			return "redirect:/";
		}
		// user not host
		// if correct
		this.service.deleteEvent(id);
		return "redirect:/events";
	}

	// event show page
	@GetMapping("/events/{event_id}")
	public String eventShow(@PathVariable("event_id") Long id, HttpSession session, Model model,
			@ModelAttribute("message") Message emptyMessage) {
		if (session.getAttribute("user_id") == null) {
			return "redirect:/";
		}
		Event event = this.service.findEventById(id);
		int counts = event.getAttendees().size();
		model.addAttribute("event", event);
		model.addAttribute("counts", counts);
		return "eventShow.jsp";
	}

	@PostMapping("/events/{event_id}/addMessage")
	public String addMessage(@PathVariable("event_id") Long id, @ModelAttribute("message") Message filledMessage) {
		this.service.saveMessage(filledMessage);
		return "redirect:/events/" + id;
	}

}
