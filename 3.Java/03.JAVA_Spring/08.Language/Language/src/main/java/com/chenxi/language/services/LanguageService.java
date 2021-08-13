package com.chenxi.language.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.chenxi.language.models.Language;
import com.chenxi.language.repositories.LanguageRepo;

@Service
public class LanguageService {

	private LanguageRepo languageRepo;
	
	public LanguageService(LanguageRepo languageRepo) {
		this.languageRepo = languageRepo;
	}
	
	public List<Language> findAllLanguage() {
		return this.languageRepo.findAll();
	}
	
	public Language findById(Long id) {
		return this.languageRepo.findById(id).orElse(null);
	}
	
	public Language save(Language language) {
		return this.languageRepo.save(language);
	}
	
	public Language update(Long id,String name, String creator, double version) {
		Language language = this.findById(id);
		language.setName(name);
		language.setCreator(creator);
		language.setVersion(version);
		return this.save(language);
	}
	
	public void delete(Long id) {
		this.languageRepo.deleteById(id);
		return;
	}
}
