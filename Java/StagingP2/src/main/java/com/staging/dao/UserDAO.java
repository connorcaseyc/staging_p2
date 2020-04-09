package com.staging.dao;

import javax.transaction.Transactional;

import org.hibernate.HibernateException;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.staging.model.User;

@Repository
@Transactional
public class UserDAO {

	private SessionFactory sesfact;

	@Autowired
	public UserDAO(SessionFactory sesfact) {
		super();
		this.sesfact = sesfact;
	}

	public User save(User user) {
		try {
			sesfact.getCurrentSession().save(user);
			return user;
		} catch (HibernateException e) {
			e.printStackTrace();
		}
		return null;
	}

	public User update(User user) {
		try {
			sesfact.getCurrentSession().update(user);
			return user;
		} catch (HibernateException e) {
			e.printStackTrace();
		}
		return null;
	}

}
