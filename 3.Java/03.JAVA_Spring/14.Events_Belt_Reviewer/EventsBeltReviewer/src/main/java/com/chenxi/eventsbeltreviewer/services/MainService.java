package com.chenxi.eventsbeltreviewer.services;

import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chenxi.eventsbeltreviewer.models.Event;
import com.chenxi.eventsbeltreviewer.models.Message;
import com.chenxi.eventsbeltreviewer.models.State;
import com.chenxi.eventsbeltreviewer.models.User;
import com.chenxi.eventsbeltreviewer.repositories.EventRepository;
import com.chenxi.eventsbeltreviewer.repositories.MessageRepository;
import com.chenxi.eventsbeltreviewer.repositories.StateRepository;
import com.chenxi.eventsbeltreviewer.repositories.UserRepository;

@Service
public class MainService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private StateRepository stateRepository;

	@Autowired
	private EventRepository eventRepository;

	@Autowired
	private MessageRepository messageRepository;

	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	public User findUserById(Long id) {
		return userRepository.findById(id).orElse(null);
	}

	public User register(User user) {
		// TAKING THE PLAIN TEXT PASSWORD AND TURNING INTO HASHED VERSION
		String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
		user.setPassword(hashed);
		return this.userRepository.save(user);
	}

	public Boolean loginAuth(String email, String password) {
		if (this.findByEmail(email) == null) {
			return false;
		}
		User user = this.findByEmail(email);
		if (!BCrypt.checkpw(password, user.getPassword())) {
			return false;
		}
		return true;
	}

	public List<State> findAllStates() {
		return stateRepository.findAll();
	}

	// events service
	public Event createEvent(Event event) {
		return this.eventRepository.save(event);
	}

	public Event findEventById(Long id) {
		return this.eventRepository.findById(id).orElse(null);
	}

	public List<Event> allEvents() {
		return this.eventRepository.findAll();
	}

	public Event addAttendee(Long eventId, long attendeeId) {
		Event event = this.eventRepository.findById(eventId).orElse(null);
		User atteedee = this.userRepository.findById(attendeeId).orElse(null);
		event.getAttendees().add(atteedee);
		return this.eventRepository.save(event);
	}

	public Event removeAttendee(Long eventId, long attendeeId) {
		Event event = this.eventRepository.findById(eventId).orElse(null);
		User atteedee = this.userRepository.findById(attendeeId).orElse(null);
		event.getAttendees().remove(atteedee);
		return this.eventRepository.save(event);
	}

	public Event updateEvent(Long id, Event event) {
		event.setId(id);
		return this.eventRepository.save(event);
	}

	public void deleteEvent(Long id) {
		this.eventRepository.deleteById(id);
	}

	public Message saveMessage(Message message) {
		return this.messageRepository.save(message);
	}

}
