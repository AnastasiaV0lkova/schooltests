import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-window-create-subjects',
  templateUrl: './window-create-subjects.component.html',
  styleUrls: ['./window-create-subjects.component.css']
})
export class WindowCreateSubjectsComponent implements OnInit {

  formSubjects: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formSubjects = new FormGroup({
      subject: new FormControl(null, [Validators.required]),
    });
  }
/*
  public classletters = [
    { id: 1, classletter: 'А' },
    { id: 2, classletter: 'Б' },
    { id: 3, classletter: 'В' },
    { id: 4, classletter: 'Г' },
    { id: 5, classletter: 'Д' },
    { id: 6, classletter: 'Е' },
    { id: 7, classletter: 'Ж' },
    { id: 8, classletter: 'З' },
  ];
  public classLettersSelected = this.classletters[1].id;
*/
  onSubmitSubjects() {}
}
