package com.sp2.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.sp2.jackson.CustomListSerializer;

import lombok.Data;

@Entity
@Table
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int user_id;

	@Column(unique = true)
	private String email;
	
	@Column(unique = true)
	private String username;

	@Column
	private String password;

	@Column
	private String firstname;

	@Column
	private String lastname;

	@OneToMany(mappedBy="user")
	@JsonSerialize(using = CustomListSerializer.class)
	private List<Item> item;

	public User() {
		super();
	}

	public User(int user_id, String email, String username, String password, String firstname, String lastname) {
		super();
		this.user_id = user_id;
		this.email = email;
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
	}

	public User(String email, String password, String firstname, String lastname) {
		super();
		this.email = email;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
	}

	public User(int user_id, String email, String password, String firstname, String lastname) {
		super();
		this.user_id = user_id;
		this.email = email;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
	}

	public User(String email, String username, String password, String firstname, String lastname) {
		super();
		this.email = email;
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
	}

}
