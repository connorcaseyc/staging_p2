package com.sp2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sp2.dao.UserDao;
import com.sp2.model.User;

@Service
public class UserService {
	
	@Autowired
	UserDao ud;
	
	public Iterable<User> grabAll() {
		return ud.findAll();
	}
	
	public User grabById(int id) {
		return ud.findById(id).get();
	}
	
	public User saveOrUpdate(User u) {
		return ud.save(u);
	}
	
	public void deleteUser(User u) {
		ud.delete(u);
		System.out.println("User deleted");
	}
	
	public User findByUsername(String username) {
		return ud.findByUsername(username);
	}
	
	public boolean login(String username, String password) {
		User u = ud.findByUsername(username);
		return (u.getPassword().equals(password));
	}

}
