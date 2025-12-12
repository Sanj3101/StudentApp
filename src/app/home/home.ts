import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentService } from '../services/student-service';
import { Student } from '../Models/Student';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  students: Student[] = [];

  constructor(private ss: StudentService) { }

  ngOnInit() {
    this.students = this.ss.getStudents();
  }
}
