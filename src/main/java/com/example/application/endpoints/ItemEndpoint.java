package com.example.application.endpoints;

import com.example.application.models.Items;
import com.example.application.repositories.ItemRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@Endpoint
@AnonymousAllowed
public class ItemEndpoint {
    @Autowired
    private ItemRepository itemRepository;

    public ItemEndpoint(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    public List<Items> findAll() {
        return itemRepository.findAll();
    }

    public Items add(String name , String description, String collection, String vendor) {
        return itemRepository.save(new Items(name, description, collection, vendor));
    }

    public Items update(Items item) {
        return itemRepository.save(item);
    }

    public void delete(Items item) {
        itemRepository.delete(item);
    }

    public void deleteById(Long id) {
        Items item = itemRepository.findById(id).orElseThrow();
        itemRepository.delete(item);
    }

    public List<Items> getItemsByCollection(String collection) {
        return itemRepository.findByCollection(collection);
    }
}
