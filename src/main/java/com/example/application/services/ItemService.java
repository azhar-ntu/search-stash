package com.example.application.services;

import com.example.application.models.Items;
import com.example.application.repositories.ItemRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.CrudRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class ItemService
       extends CrudRepositoryService<Items, Long, ItemRepository> {
}