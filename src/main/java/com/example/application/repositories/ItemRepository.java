package com.example.application.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.example.application.models.Items;

public interface ItemRepository extends JpaRepository<Items, Long>,
        JpaSpecificationExecutor<Items> {
        
        List<Items> findByCollection(String collection);

}
