package com.example.registration.service;

import com.example.registration.model.Course;
import com.example.registration.model.Student;
import com.example.registration.repository.CourseRepository;
import com.example.registration.repository.StudentRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class StudentService {

    private final StudentRepository studentRepo;
    private final CourseRepository courseRepo;

    public StudentService(StudentRepository studentRepo, CourseRepository courseRepo) {
        this.studentRepo = studentRepo;
        this.courseRepo = courseRepo;
    }

    public List<Student> listAll() {
        return studentRepo.findAll();
    }

    public Student get(Long id) {
        return studentRepo.findById(id).orElse(null);
    }

    public Student save(Student s) {
        return studentRepo.save(s);
    }

    public void delete(Long id) {
        studentRepo.deleteById(id);
    }

    public void enrollCourses(Long studentId, Set<Long> courseIds) {
        Student s = get(studentId);
        if (s == null) return;
        Set<Course> courses = courseIds.stream()
                .map(courseRepo::findById)
                .filter(OptionalCourse -> OptionalCourse.isPresent())
                .map(OptionalCourse -> OptionalCourse.get())
                .collect(Collectors.toSet());
        s.setCourses(courses);
        save(s);
    }
}