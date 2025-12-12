import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../services/student-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {

  studentForm!: FormGroup;
  classes: string[] = [];

  constructor(
    private fb: FormBuilder,
    private ss: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.classes = ["6", "7", "8", "9"];

    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      class: ['', Validators.required],
      gender: ['', Validators.required],
      hasHobby: [false],
      hobby: [''],
      favoriteSubject: ['']
    });

    this.studentForm.get('hasHobby')?.valueChanges.subscribe(hasHobby => {
      if (!hasHobby) {
        this.studentForm.get('hobby')?.reset('');
      }
    });
  }

  get selectedClass() {
    return this.studentForm.get('class')?.value;
  }

  save() {
    if (this.studentForm.valid) {
      this.ss.addStudent(this.studentForm.value);
      this.router.navigate(['/home']);
    }
  }
}
