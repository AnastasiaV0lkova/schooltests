import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-window-create-users',
  templateUrl: './window-create-users.component.html',
  styleUrls: ['./window-create-users.component.css'],
})
export class WindowCreateUsersComponent implements OnInit {
  formStudents: FormGroup;
  dialogRef: any;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  studentControl = new FormControl('', Validators.required);
  ngOnInit() {
    this.formStudents = new FormGroup({
      surname: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
      /*  classnumber: new FormControl(null, [Validators.required]),
      classletter: new FormControl(null, [Validators.required]), */
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
    if (this.data.item) {
      
      this.formStudents.get('surname').setValue(this.data.item.surname);
      this.formStudents.get('name').setValue(this.data.item.name);
      this.formStudents.get('patronymic').setValue(this.data.item.patronymic);
      /*   this.formStudents.get('class').setValue(this.data.item.class);*/
      this.formStudents.get('username').disable(this.data.item.username);
      this.formStudents.get('password').disable(this.data.item.password);
    }
  }
  public class = [
    { id: 1, class: 1 },
    { id: 2, class: 2 },
    { id: 3, class: 3 },
    { id: 4, class: 4 },
    { id: 5, class: 5 },
    { id: 6, class: 6 },
    { id: 7, class: 7 },
    { id: 8, class: 8 },
    { id: 9, class: 9 },
    { id: 10, class: 10 },
    { id: 11, class: 11 },
  ];
  public classSelected = this.class[1].id;
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
  onSubmitStudents() {}

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
