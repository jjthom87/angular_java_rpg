package com.angular.rpg.controller;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.angular.rpg.entity.Character;
import com.angular.rpg.repository.CharacterRepository;

@Controller
@RequestMapping("/api")
public class WebController {
	
	@Autowired
	private CharacterRepository characterRepository;
	
	private static Logger log = Logger.getLogger("InfoLogging");
	
	@RequestMapping(value = "/characters", method = RequestMethod.GET)
	public @ResponseBody Iterable<Character> getAllCharacters() {
		log.info("/api/characters"); 
		return characterRepository.findAll();
	}
}
