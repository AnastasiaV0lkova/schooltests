import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup 

  constructor() {
   }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl( null, [Validators.required]),
      password: new FormControl( null, [Validators.required, Validators.minLength(4)])
   })
  }
   onSubmit() {

   }
}
