package com.angular.rpg.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class UserEntity {

	@Id
	@GeneratedValue
	private Integer id;

	@Column(unique = true)
	private String username;
	
	@Column
	private String password;
	
	@Column()
	private Integer characterId;
}
