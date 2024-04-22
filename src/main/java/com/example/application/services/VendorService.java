package com.example.application.services;

import com.example.application.models.Vendor;
import com.example.application.repositories.VendorRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.CrudRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class VendorService
       extends CrudRepositoryService<Vendor, Long, VendorRepository> {
}