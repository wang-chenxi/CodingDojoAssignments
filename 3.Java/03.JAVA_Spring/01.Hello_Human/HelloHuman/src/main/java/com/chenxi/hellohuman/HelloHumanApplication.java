package com.chenxi.hellohuman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloHumanApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloHumanApplication.class, args);
	}

//	@RequestMapping("/")
//	public String human(@RequestParam(value="name",required=false) String name) {
//		if(name != null) {
//			return "<h1>Hello " + name + "!</h1><br>Welcome to SpringBoot!";
//		}else {
//			return "<h1>Hello Human!</h1><br>Welcome to SpringBoot!";		
//		}
//	}
	
}
