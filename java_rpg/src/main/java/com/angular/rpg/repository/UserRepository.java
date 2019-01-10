package com.angular.rpg.repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.angular.rpg.entity.UserEntity;

public interface UserRepository extends CrudRepository<UserEntity, String> {
	UserEntity findByUsername(String username);
	List<UserEntity> findAll();
}
