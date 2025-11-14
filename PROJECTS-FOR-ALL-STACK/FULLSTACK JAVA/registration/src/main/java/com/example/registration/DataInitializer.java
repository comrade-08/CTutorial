package com.example.registration;

import com.example.registration.model.Course;
import com.example.registration.model.Student;
import com.example.registration.repository.CourseRepository;
import com.example.registration.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final CourseRepository courseRepo;
    private final StudentRepository studentRepo;

    public DataInitializer(CourseRepository courseRepo, StudentRepository studentRepo) {
        this.courseRepo = courseRepo;
        this.studentRepo = studentRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        if(courseRepo.count() == 0) {
            Course c1 = new Course("Data Structures", "Dr. Rao", 4);
            Course c2 = new Course("Operating Systems", "Prof. Gupta", 3);
            Course c3 = new Course("Database Systems", "Dr. Mehta", 3);
            courseRepo.save(c1);
            courseRepo.save(c2);
            courseRepo.save(c3);
        }

        if(studentRepo.count() == 0) {
            Student s1 = new Student("Alice Kumar","alice@example.com","CSE");
            Student s2 = new Student("Ravi Singh","ravi@example.com","ECE");
            studentRepo.save(s1);
            studentRepo.save(s2);
        }
    }
}
