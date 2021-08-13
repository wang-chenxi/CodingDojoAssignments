package com.chenxi.lookify.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.chenxi.lookify.models.Song;
import com.chenxi.lookify.services.SongService;

@Controller
public class MainController {

	@Autowired
	private SongService service;
	
	//index
	@GetMapping("/")
	public String index() {
		return "index.jsp";
	}
	
	//show dashboard
	@GetMapping("/dashboard")
	public String all(Model model) {
		List<Song> all = this.service.all();
		model.addAttribute("songs", all);
		return "dashboard.jsp";
	}
	
	//search by artist
	@PostMapping("/dashboard/search")
	public String search(@RequestParam(value="artist")String artist) {
		if(artist.isBlank()) {
			return "redirect:/dashboard";
		}
		return "redirect:/dashboard/search/" +artist;
	}
	
	//filter by artist
	@GetMapping("/dashboard/search/{artist}")
	public String searchByArtist(@PathVariable("artist") String artist, Model model) {
		List<Song> songsByArtist = this.service.findByArtist(artist);
		model.addAttribute("songs",songsByArtist);
		model.addAttribute("keyword", artist);
		return "dashboard.jsp";
	}
	
	// to add new
	@GetMapping("/songs/new")
	public String addSong(@ModelAttribute("newSong") Song emptySong) {
		return "new.jsp";
	}
	
	//add new or return error
	@PostMapping("/songs/new")
	public String add(@Valid @ModelAttribute("newSong")Song filledSong,BindingResult result) {
		if(result.hasErrors()) {
			return "new.jsp";
		}else {
			this.service.addSong(filledSong);
			return "redirect:/dashboard";
		}
	}
	
	//show top ten songs by rating
	@GetMapping("/search/topTen")
	public String topTen(Model model) {
		List<Song> songs = this.service.topTen();
		model.addAttribute("songs",songs);
		return "top.jsp";
	}
	
	//show single song
	@GetMapping("/songs/{id}")
	public String show(@PathVariable("id")Long id, Model model) {
		Song song = this.service.findById(id);
		model.addAttribute("song",song);
		return "show.jsp";
	}
	
	//delete a song
	@GetMapping("songs/delete/{id}")
	public String delete(@PathVariable("id") Long id) {
		this.service.delete(id);
		return "redirect:/dashboard";
	}
	
	
}
