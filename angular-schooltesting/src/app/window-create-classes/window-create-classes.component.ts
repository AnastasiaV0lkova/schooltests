import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-window-create-classes',
  templateUrl: './window-create-classes.component.html',
  styleUrls: ['./window-create-classes.component.css']
})
export class WindowCreateClassesComponent implements OnInit {

  formClasses: FormGroup;

  constructor() {}

  ngOnInit() {
   /* this.formClasses = new FormGroup({
      classnumber: new FormControl(null, [Validators.required]),
      classletter: new FormControl(null, [Validators.required]),
    }); */
  }
  public classnumbers = [
    { id: 1, classnumber: 1 },
    { id: 2, classnumber: 2 },
    { id: 3, classnumber: 3 },
    { id: 4, classnumber: 4 },
    { id: 5, classnumber: 5 },
    { id: 6, classnumber: 6 },
    { id: 7, classnumber: 7 },
    { id: 8, classnumber: 8 },
    { id: 9, classnumber: 9 },
    { id: 10, classnumber: 10 },
    { id: 11, classnumber: 11 },
  ];
  public classNumbersSelected = this.classnumbers[1].id;

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

  onSubmitClasses() {}

}
