package com.chenxi.eventsbeltreviewer.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="states")
public class State {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String state;
	
	@OneToMany(mappedBy = "state",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	private List<User> users;
	
	public State() {
		
	}
	
	public State(String state) {
		this.state = state;
	}

	public String getState() {
		return state;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public Long getId() {
		return id;
	}
	
	
}

