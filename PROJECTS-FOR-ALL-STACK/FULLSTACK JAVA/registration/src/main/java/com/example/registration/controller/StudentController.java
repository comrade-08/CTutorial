package com.example.registration.controller;

import com.example.registration.model.Course;
import com.example.registration.model.Student;
import com.example.registration.service.CourseService;
import com.example.registration.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/students")
public class StudentController {

    private final StudentService studentService;
    private final CourseService courseService;

    public StudentController(StudentService studentService, CourseService courseService) {
        this.studentService = studentService;
        this.courseService = courseService;
    }

    @GetMapping
    public String list(Model model) {
        model.addAttribute("students", studentService.listAll());
        return "students/list";
    }

    @GetMapping("/new")
    public String createForm(Model model) {
        model.addAttribute("student", new Student());
        return "students/form";
    }

    @PostMapping("/save")
    public String save(@Valid @ModelAttribute("student") Student student, BindingResult br, Model model) {
        if (br.hasErrors()) {
            return "students/form";
        }
        studentService.save(student);
        return "redirect:/students";
    }

    @GetMapping("/edit/{id}")
    public String edit(@PathVariable Long id, Model model) {
        Student s = studentService.get(id);
        if (s == null) return "redirect:/students";
        model.addAttribute("student", s);
        return "students/form";
    }

    @GetMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        studentService.delete(id);
        return "redirect:/students";
    }

    @GetMapping("/{id}")
    public String view(@PathVariable Long id, Model model) {
        Student s = studentService.get(id);
        if (s == null) return "redirect:/students";
        model.addAttribute("student", s);
        return "students/view";
    }

    // Enrollment page (show all courses with current selections)
    @GetMapping("/{id}/enroll")
    public String enrollForm(@PathVariable Long id, Model model) {
        Student s = studentService.get(id);
        if (s == null) return "redirect:/students";
        List<Course> allCourses = courseService.listAll();
        model.addAttribute("student", s);
        model.addAttribute("courses", allCourses);
        Set<Long> selected = s.getCourses().stream().map(Course::getId).collect(Collectors.toSet());
        model.addAttribute("selectedCourses", selected);
        return "students/enroll";
    }

    // Handle enrollment (selected courseIds from checkboxes)
    @PostMapping("/{id}/enroll")
    public String enrollSubmit(@PathVariable Long id, @RequestParam(value = "courseIds", required = false) List<Long> courseIds) {
        Set<Long> ids = (courseIds == null) ? Collections.emptySet() : new HashSet<>(courseIds);
        studentService.enrollCourses(id, ids);
        return "redirect:/students/" + id;
    }
}
