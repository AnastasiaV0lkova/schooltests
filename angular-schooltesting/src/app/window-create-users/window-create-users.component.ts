import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-window-create-users',
  templateUrl: './window-create-users.component.html',
  styleUrls: ['./window-create-users.component.css'],
})
export class WindowCreateUsersComponent implements OnInit {
  formStudents: FormGroup;
  dialogRef: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  studentControl = new FormControl('', Validators.required);
  ngOnInit() {
    this.formStudents = new FormGroup({
      FIO: new FormControl(null, [Validators.required]),
      /*  classnumber: new FormControl(null, [Validators.required]),
      classletter: new FormControl(null, [Validators.required]), */
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
    console.log(this.data);
    this.formStudents.get('username').setValue(this.data.username);
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

  onSubmitStudents() {}

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
