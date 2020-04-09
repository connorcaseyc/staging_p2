package com.staging.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.staging.model.User;
import com.staging.service.UserService;

@Controller
@CrossOrigin(origins = { "http://localhost:3000" })
public class UserController {

	@Autowired
	private UserService us;

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, value = "/add")
	@ResponseBody
	public ResponseEntity<User> save(User user) {
		us.save(user);
		return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/update", produces = "application/json")
	public ResponseEntity<User> update(@RequestBody User user) {
		us.update(user);
		return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
	}

}
