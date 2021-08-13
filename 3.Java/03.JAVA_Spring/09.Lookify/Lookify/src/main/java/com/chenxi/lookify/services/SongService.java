package com.chenxi.lookify.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chenxi.lookify.models.Song;
import com.chenxi.lookify.repositories.SongRepository;

@Service
public class SongService {

	@Autowired
	private SongRepository songRepository;
	
	public List<Song> all(){
		return this.songRepository.findAll();
	}
	
	public Song addSong(Song song) {
		return this.songRepository.save(song);
	}
	
	public Song findById(Long id) {
		return this.songRepository.findById(id).orElse(null);
	}
	
	public List<Song> findByArtist(String artist) {
		return this.songRepository.findAllByArtist(artist);
	}
	
	public List<Song> topTen(){
		return this.songRepository.findTop10ByOrderByRatingDesc();
	}
	
	public void delete(Long id) {
		this.songRepository.deleteById(id);
	}
	
}
