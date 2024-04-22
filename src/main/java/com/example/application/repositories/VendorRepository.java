package com.example.application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.application.models.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Long>,
        JpaSpecificationExecutor<Vendor> {
}
