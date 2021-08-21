package com.chenxi.eventsbeltreviewer.validators;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.chenxi.eventsbeltreviewer.models.User;
import com.chenxi.eventsbeltreviewer.services.MainService;

@Component
public class UserValidator implements Validator {

	@Autowired
	private MainService service;
	
	@Override
	public boolean supports(Class<?> clazz) {
		// TODO Auto-generated method stub
		return User.class.equals(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
		// TODO Auto-generated method stub
		User user = (User) target;
		
        // CHECK TO SEE IF CONFIRM PASSWORD AND PASSWORD MATCH
        if (!user.getPasswordConfirmation().equals(user.getPassword())) {
            errors.rejectValue("passwordConfirmation", "Match");
        }
        
        // CHECK FOR UNIQUE EMAIL
        if(service.findByEmail(user.getEmail()) != null) {
            errors.rejectValue("email", "Duplicate");
        }
		
		
	}

}
