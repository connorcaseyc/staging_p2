package com.sp2.controller;

import com.sp2.model.Item;
import com.sp2.service.ItemService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/item")
@CrossOrigin(origins="http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService is;

    @GetMapping("/all")
    public Iterable<Item> findAll() {
        return is.grabAll();
    }

    @PostMapping("/id")
    public Item findById(@RequestBody Item i) {
        int id = i.getItem_id();
        return is.grabById(id);
    }

    @PostMapping("/new")
    public Item insert(@RequestBody Item i) {
        return is.saveOrUpdate(i);
    }

    @PutMapping("/update")
    public Item update(@RequestBody Item i) {
        return is.saveOrUpdate(i);
    }

    @DeleteMapping("/delete")
    public void delete(@RequestBody Item i) {
        is.deleteItem(i);
    }

}
