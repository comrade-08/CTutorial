package com.example.registration.service;

import com.example.registration.model.Course;
import com.example.registration.repository.CourseRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CourseService {

    private final CourseRepository courseRepo;

    public CourseService(CourseRepository courseRepo) {
        this.courseRepo = courseRepo;
    }

    public List<Course> listAll() {
        return courseRepo.findAll();
    }

    public Course get(Long id) {
        return courseRepo.findById(id).orElse(null);
    }

    public Course save(Course c) {
        return courseRepo.save(c);
    }

    public void delete(Long id) {
        courseRepo.deleteById(id);
    }
}
