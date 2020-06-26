import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-window-create-subjects',
  templateUrl: './window-create-subjects.component.html',
  styleUrls: ['./window-create-subjects.component.css'],
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
  onSubmitSubjects() {}
}
