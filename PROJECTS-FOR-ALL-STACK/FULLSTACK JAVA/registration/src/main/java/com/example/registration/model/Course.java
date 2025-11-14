package com.example.registration.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title required")
    private String title;

    private String instructor;

    private int credits;

    @ManyToMany(mappedBy = "courses", fetch = FetchType.LAZY)
    private Set<Student> students = new HashSet<>();

    // constructors, getters, setters
    public Course() {}

    public Course(String title, String instructor, int credits) {
        this.title = title;
        this.instructor = instructor;
        this.credits = credits;
    }

    // getters & setters...

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getInstructor() { return instructor; }
    public void setInstructor(String instructor) { this.instructor = instructor; }

    public int getCredits() { return credits; }
    public void setCredits(int credits) { this.credits = credits; }

    public Set<Student> getStudents() { return students; }
    public void setStudents(Set<Student> students) { this.students = students; }
}
