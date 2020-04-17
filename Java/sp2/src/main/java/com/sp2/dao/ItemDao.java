package com.sp2.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sp2.model.Item;

@Repository
@Transactional
public interface ItemDao extends CrudRepository<Item, Integer> {

}