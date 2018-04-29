package com.angular.rpg.entity;

import java.util.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.ElementCollection;

import lombok.Data;

@Entity
@Table(name = "characters")
@Data
public class Character {
	@Id
	@GeneratedValue
	private Integer id;

	@Column(unique = true)
	private String name;

	private String type;
	
	@ElementCollection
	Map<String, String> collection;

}
