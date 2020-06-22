import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-window-create-administrators',
  templateUrl: './window-create-administrators.component.html',
  styleUrls: ['./window-create-administrators.component.css']
})
export class WindowCreateAdministratorsComponent implements OnInit {

  formAdministrators: FormGroup;

  constructor() {}

  ngOnInit() {
    this.formAdministrators = new FormGroup({
      FIO: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  onSubmitAdministrators() {}

}
