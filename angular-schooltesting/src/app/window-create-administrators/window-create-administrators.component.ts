import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  FormGroupDirective,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  selector: 'app-window-create-administrators',
  templateUrl: './window-create-administrators.component.html',
  styleUrls: ['./window-create-administrators.component.css'],
})
export class WindowCreateAdministratorsComponent implements OnInit {
  formAdministrators: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  administratorControl = new FormControl('', Validators.required);
  ngOnInit() {
    this.formAdministrators = new FormGroup({
      surname: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });

    if (this.data.item) {
      this.formAdministrators.get('surname').setValue(this.data.item.surname);
      this.formAdministrators.get('name').setValue(this.data.item.name);
      this.formAdministrators.get('patronymic').setValue(this.data.item.patronymic);
      this.formAdministrators.get('username').disable(this.data.item.username);
      this.formAdministrators.get('password').disable(this.data.item.username);
    }
  }
 /* if(index: any) {
    this.data.splice(this.data.indexOf('fio'), 1);
  }*/

  onSubmitAdministrators() {}
}
