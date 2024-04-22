package com.example.application.endpoints;

import java.util.List;
import java.util.Set;

import com.example.application.models.Collection;
import com.example.application.models.Items;
import com.example.application.repositories.CollectionRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;

@Endpoint
@AnonymousAllowed
public class CollectionEndpoint {
    private CollectionRepository collectionRepository;

    public CollectionEndpoint(CollectionRepository collectionRepository) {
        this.collectionRepository = collectionRepository;
    }

    public List<Collection> findAll() {
        return collectionRepository.findAll();
    }
    public Collection add(String name, Boolean favourite) {
        return collectionRepository.save(new Collection(name, favourite));
    }
    public Collection save(Collection Collection) {
        return collectionRepository.save(Collection);
    }
    // public Set<Items> addItemToCollection(Collection collection, Items item) {
    //     Set<Items> items = collection.getItems();
    //     items.add(item);
    //     collection.setItems(items);
    //     return items;
    // }
}