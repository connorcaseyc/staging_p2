package com.sp2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sp2.model.User;
import com.sp2.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
	
	@Autowired
	UserService us;
	
	@PostMapping(value = "/login")
    public User login(@RequestBody User u){
        boolean resp = us.login(u.getUsername(),u.getPassword());
        if(resp){
            return us.findByUsername(u.getUsername()); 
        }
        return null;
    }
	
	@GetMapping("/all")
	public Iterable<User> findAll() {
		return us.grabAll();
	}
	
	@PostMapping("/id")
	public User findById(int id) {
		return us.grabById(id);
	}
	
	@PostMapping("/new")
	public User insert(@RequestBody User u) {
		return us.saveOrUpdate(u);
	}
	
	@PutMapping("/update")
	public User update(@RequestBody User u) {
		return us.saveOrUpdate(u);
	}
	
	@DeleteMapping("/delete")
	public void delete(@RequestBody User u) {
		us.deleteUser(u);
	}

}
