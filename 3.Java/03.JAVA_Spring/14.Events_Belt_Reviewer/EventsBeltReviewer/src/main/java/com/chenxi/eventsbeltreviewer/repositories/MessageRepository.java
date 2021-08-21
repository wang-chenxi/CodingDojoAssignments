package com.chenxi.eventsbeltreviewer.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.chenxi.eventsbeltreviewer.models.Message;

@Repository
public interface MessageRepository extends CrudRepository<Message, Long> {

}
