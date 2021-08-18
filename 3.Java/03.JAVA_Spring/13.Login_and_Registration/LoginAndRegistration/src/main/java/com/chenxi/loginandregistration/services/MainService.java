package com.chenxi.loginandregistration.services;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chenxi.loginandregistration.models.User;
import com.chenxi.loginandregistration.repositories.UserRepository;

@Service
public class MainService {
	
	@Autowired
	private UserRepository repository;
	
	public User register(User user) {
		// TAKING THE PLAIN TEXT PASSWORD AND TURNING INTO HASHED VERSION
        String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        user.setPassword(hashed);
		return this.repository.save(user);
	}
	
	public User findByEmail(String email) {
		return this.repository.findByEmail(email);
	}
	
	public Boolean loginAuth(String email, String password) {
		if(this.findByEmail(email)== null) {
			return false;
		}
		User user = this.findByEmail(email);
		if(!BCrypt.checkpw(password, user.getPassword())) {
			return false;
		}
		return true;
	}

	
	

}
