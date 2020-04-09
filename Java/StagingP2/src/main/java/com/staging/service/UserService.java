package com.staging.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.staging.dao.UserDAO;
import com.staging.model.User;

@Service
public class UserService {

	private UserDAO ud;

	@Autowired
	public void setUd(UserDAO ud) {
		this.ud = ud;
	}

	public User save(User user) {
		return ud.save(user);
	}

	public User update(User user) {
		return ud.update(user);
	}

}
