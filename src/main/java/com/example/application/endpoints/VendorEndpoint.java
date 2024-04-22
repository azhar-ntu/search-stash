package com.example.application.endpoints;

import java.util.List;

import com.example.application.models.Vendor;
import com.example.application.repositories.VendorRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;

@Endpoint
@AnonymousAllowed
public class VendorEndpoint {
    private VendorRepository vendorRepository;

    public VendorEndpoint(VendorRepository vendorRepository) {
        this.vendorRepository = vendorRepository;
    }

    public List<Vendor> findAll() {
        return vendorRepository.findAll();
    }
    public Vendor add(String name, String description, String contactInfo) {
        return vendorRepository.save(new Vendor(name, description, contactInfo));
    }
    public Vendor save(Vendor vendor) {
        return vendorRepository.save(vendor);
    }
}