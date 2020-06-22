import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-window-create-teachers',
  templateUrl: './window-create-teachers.component.html',
  styleUrls: ['./window-create-teachers.component.css']
})
export class WindowCreateTeachersComponent implements OnInit {

  formTeachers: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formTeachers = new FormGroup({
      FIO: new FormControl(null, [Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  onSubmitStudents() {}
}
