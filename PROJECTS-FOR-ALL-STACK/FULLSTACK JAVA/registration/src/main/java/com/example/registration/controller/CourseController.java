package com.example.registration.controller;

import com.example.registration.model.Course;
import com.example.registration.service.CourseService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/courses")
public class CourseController {

    private final CourseService courseService;
    public CourseController(CourseService courseService) { this.courseService = courseService; }

    @GetMapping
    public String list(Model model) {
        model.addAttribute("courses", courseService.listAll());
        return "courses/list";
    }

    @GetMapping("/new")
    public String createForm(Model model) {
        model.addAttribute("course", new Course());
        return "courses/form";
    }

    @PostMapping("/save")
    public String save(@Valid @ModelAttribute("course") Course course, BindingResult br) {
        if (br.hasErrors()) {
            return "courses/form";
        }
        courseService.save(course);
        return "redirect:/courses";
    }

    @GetMapping("/edit/{id}")
    public String edit(@PathVariable Long id, Model model) {
        Course c = courseService.get(id);
        if (c == null) return "redirect:/courses";
        model.addAttribute("course", c);
        return "courses/form";
    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        courseService.delete(id);
        return "redirect:/courses";
    }

    @GetMapping("/{id}")
    public String view(@PathVariable Long id, Model model) {
        Course c = courseService.get(id);
        if (c == null) return "redirect:/courses";
        model.addAttribute("course", c);
        return "courses/view";
    }
}
