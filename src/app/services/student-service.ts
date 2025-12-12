import { Injectable } from '@angular/core';
import { Student } from '../Models/Student';

@Injectable({
  providedIn: 'root',
})

export class StudentService {
  students: Student[] = [
    {
      name: "Sanjana Biswas",
      class: "7",
      gender: "Female",
      hasHobby: true,
      hobby: "Photography",
      favoriteSubject: "Math"
    },
    {
      name: "Aarav Mehra",
      class: "8",
      gender: "Male",
      hasHobby: false
    }
  ];

  getStudents() {
    return this.students;
  }

  addStudent(s: Student) {
    this.students.push(s);
  }
}
