package com.angular.rpg.repository;

import org.springframework.data.repository.CrudRepository;
import com.angular.rpg.entity.Character;

public interface CharacterRepository extends CrudRepository<Character, String> {
	Character findByName(String name);
	Iterable<Character> findAll();
}
