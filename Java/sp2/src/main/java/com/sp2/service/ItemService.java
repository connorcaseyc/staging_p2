package com.sp2.service;

import com.sp2.dao.ItemDao;
import com.sp2.model.Item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {

    @Autowired
    ItemDao idao;

    public Iterable<Item> grabAll() {
		return idao.findAll();
	}
	
	public Item grabById(int id) {
		return idao.findById(id).get();
	}
	
	public Item saveOrUpdate(Item i) {
		return idao.save(i);
	}
	
	public void deleteItem(Item i) {
		idao.delete(i);
		System.out.println("User deleted");
	}

}