package com.chenxi.dojoandninjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.chenxi.dojoandninjas.models.Ninja;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long>{

	List<Ninja> findAll();
	List<Ninja> findAllByDojoId(Long dojo_id);
	
}
