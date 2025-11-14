package com.example.eventmanagement.controller;

import com.example.eventmanagement.model.Event;
import com.example.eventmanagement.service.EventService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/events")
public class EventController {

    private final EventService service;

    public EventController(EventService service) {
        this.service = service;
    }

    @GetMapping
    public String listEvents(Model model) {
        model.addAttribute("events", service.listAll());
        return "events/list";
    }

    @GetMapping("/new")
    public String createForm(Model model) {
        model.addAttribute("event", new Event());
        return "events/form";
    }

    @PostMapping
    public String saveEvent(@ModelAttribute Event event) {
        service.save(event);
        return "redirect:/events";
    }

    @GetMapping("/edit/{id}")
    public String editForm(@PathVariable Long id, Model model) {
        model.addAttribute("event", service.get(id));
        return "events/form";
    }

    @GetMapping("/delete/{id}")
    public String deleteEvent(@PathVariable Long id) {
        service.delete(id);
        return "redirect:/events";
    }

    @GetMapping("/{id}")
    public String viewEvent(@PathVariable Long id, Model model) {
        model.addAttribute("event", service.get(id));
        return "events/view";
    }
}
