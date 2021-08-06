package com.chenxi.strings;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@SpringBootApplication
public class StringsApplication {

	public static void main(String[] args) {
		SpringApplication.run(StringsApplication.class, args);
	}

	@RequestMapping("/")
	public String welcome() {
		return "Hello User, how are you?";
	}
	
	@RequestMapping("/random")
	public String randome() {
		int index = (int) Math.floor(Math.random()*randomMessages.size());
		return randomMessages.get(index);
	}
	

	private List<String> randomMessages= Arrays.asList("test1","test2","test3","test4");
		
	
}
