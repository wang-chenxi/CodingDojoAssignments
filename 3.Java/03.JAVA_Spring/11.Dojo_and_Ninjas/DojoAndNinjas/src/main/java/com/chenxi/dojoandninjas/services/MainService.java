package com.chenxi.dojoandninjas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chenxi.dojoandninjas.models.Dojo;
import com.chenxi.dojoandninjas.models.Ninja;
import com.chenxi.dojoandninjas.repositories.DojoRepository;
import com.chenxi.dojoandninjas.repositories.NinjaRepository;

@Service
public class MainService {

	@Autowired
	private DojoRepository dojoRepository;
	
	@Autowired
	private NinjaRepository ninjaRepository;
	
	public List<Dojo> findAll(){
		return this.dojoRepository.findAll();
	}
	
	public Dojo save(Dojo dojo) {
		return this.dojoRepository.save(dojo);
	}
	
	public Dojo findDojoById(Long id) {
		return this.dojoRepository.findById(id).orElse(null);
	}
	
	public List<Ninja> findAllNinjas(){
		return this.ninjaRepository.findAll();
	}
	
	public List<Ninja> findAllNinjasByDojoId(Long id){
		return this.ninjaRepository.findAllByDojoId(id);
	}
	
	public Ninja saveNinja(Ninja ninja) {
		return this.ninjaRepository.save(ninja);
	}
}
