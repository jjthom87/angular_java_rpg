package com.angular.rpg.controller;

import com.angular.rpg.entity.Character;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.angular.rpg.repository.CharacterRepository;

@RestController
public class Controller {
	
	@Autowired
	private CharacterRepository characterRepository;

	@RequestMapping(value = "/*", method = RequestMethod.GET)
	public String index() {
		return "index";
	}
	
	@RequestMapping(value = "/characters", method = RequestMethod.GET)
	public @ResponseBody Iterable<Character> getAllCharacters() {
		return characterRepository.findAll();
	}
}
