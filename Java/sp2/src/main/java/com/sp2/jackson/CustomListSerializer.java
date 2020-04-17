package com.sp2.jackson;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.sp2.model.Item;

public class CustomListSerializer extends StdSerializer<List<Item>> {

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    public CustomListSerializer() {
         this(null);
     }
  
     public CustomListSerializer(Class<List<Item>> t) {
         super(t);
     }
  
     @Override
     public void serialize(
       List<Item> items, 
       JsonGenerator generator, 
       SerializerProvider provider) 
       throws IOException, JsonProcessingException {
          
         List<Integer> ids = new ArrayList<>();
         for (Item item : items) {
             ids.add(item.getItem_id());
         }
         generator.writeObject(ids);
     }

}
