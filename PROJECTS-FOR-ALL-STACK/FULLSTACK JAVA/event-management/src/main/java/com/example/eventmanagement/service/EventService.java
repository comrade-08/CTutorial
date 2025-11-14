package com.example.eventmanagement.service;

import java.util.List;
import com.example.eventmanagement.model.Event;
import com.example.eventmanagement.repository.EventRepository;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    private final EventRepository repo;

    public EventService(EventRepository repo) {
        this.repo = repo;
    }

    public List<Event> listAll() {
        return repo.findAll();
    }

    public Event get(Long id) {
        return repo.findById(id).orElse(null);
    }

    public void save(Event event) {
        repo.save(event);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
