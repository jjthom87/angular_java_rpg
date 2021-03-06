package com.angular.rpg.controller;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.angular.rpg.domain.LoggedInUserObj;
import com.angular.rpg.domain.RegisterObj;
import com.angular.rpg.entity.Character;
import com.angular.rpg.entity.UserEntity;
import com.angular.rpg.repository.CharacterRepository;
import com.angular.rpg.repository.UserRepository;

@Controller
@RequestMapping("/api")
public class WebController {
	
	@Autowired
	private CharacterRepository characterRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	
	private static Logger log = Logger.getLogger("InfoLogging");
	
	@RequestMapping(value = "/characters", method = RequestMethod.GET)
	public @ResponseBody Iterable<Character> getAllCharacters() {
		log.info("/api/characters"); 
		return characterRepository.findAll();
	}
	
	@RequestMapping(value = "/addCharacterToUser", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<String> addCharacterToUser(@RequestParam int characterId) {
		log.info("characterId: " + characterId + " being added for user");
		UserEntity loggedInUser = userRepository.findByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
		loggedInUser.setCharacterId(characterId);
		userRepository.save(loggedInUser);
		return new ResponseEntity<String>("Character Added To User", HttpStatus.OK);
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<UserEntity> registerUser(@RequestBody RegisterObj registerObj) {
		UserEntity userEntity = new UserEntity();
		userEntity.setUsername(registerObj.getUsername());
		userEntity.setPassword(bCryptPasswordEncoder.encode(registerObj.getPassword()));
		userRepository.save(userEntity);
		return new ResponseEntity<UserEntity>(userEntity, HttpStatus.OK);
	}

	
	@RequestMapping(value = "/getUser", method = RequestMethod.GET)
	public @ResponseBody LoggedInUserObj getUser() {
		LoggedInUserObj obj = new LoggedInUserObj();
		String loggedInUserName = SecurityContextHolder.getContext().getAuthentication().getName();
		obj.setUsername(loggedInUserName);
		obj.setCharacter_id(userRepository.findByUsername(loggedInUserName).getCharacterId());
		obj.setUsers_character(characterRepository.findById(userRepository.findByUsername(loggedInUserName).getCharacterId()).getName());
		return obj;
	}

}
