package com.angular.rpg.domain;

import lombok.Data;

@Data
public class LoggedInUserObj {
	private String username;
	private Integer character_id;
	private String users_character;
}
