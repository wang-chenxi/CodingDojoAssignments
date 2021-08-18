package com.chenxi.loginandregistration.repositories;
import javax.validation.constraints.Email;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.chenxi.loginandregistration.models.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

	User findByEmail(String email);
}
