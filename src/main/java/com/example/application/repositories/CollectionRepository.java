package com.example.application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.application.models.Collection;

public interface CollectionRepository extends JpaRepository<Collection, Long>,
        JpaSpecificationExecutor<Collection> {
}
