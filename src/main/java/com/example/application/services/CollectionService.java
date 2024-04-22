package com.example.application.services;

import com.example.application.models.Collection;
import com.example.application.repositories.CollectionRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.CrudRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class CollectionService
       extends CrudRepositoryService<Collection, Long, CollectionRepository> {
}