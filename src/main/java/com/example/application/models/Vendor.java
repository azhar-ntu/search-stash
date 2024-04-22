package com.example.application.models;

import java.util.Set;

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String contactInfo;

    
    public Vendor() {
    }

    public Vendor(String name, String description, String contactInfo) {
        this.name = name;
        this.description = description;
        this.contactInfo = contactInfo;
    }

    // @Nullable
    // @OneToMany(mappedBy = "vendor")
    // private Set<Items> items;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    // public Set<Items> getItems() {
    //     return items;
    // }

    // public void setItems(Set<Items> items) {
    //     this.items = items;
    // }
}
