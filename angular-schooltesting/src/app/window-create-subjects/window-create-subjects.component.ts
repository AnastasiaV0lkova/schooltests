import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-window-create-subjects',
  templateUrl: './window-create-subjects.component.html',
  styleUrls: ['./window-create-subjects.component.css']
})
export class WindowCreateSubjectsComponent implements OnInit {

  formSubjects: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.formSubjects = new FormGroup({
      subject: new FormControl(null, [Validators.required]),
    });
    if (this.data.item) {
      this.formSubjects.get('subject').setValue(this.data.item.subject);
    }
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
