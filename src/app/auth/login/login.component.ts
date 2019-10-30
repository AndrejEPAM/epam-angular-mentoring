import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9.@]*'),
        Validators.minLength(4),
        Validators.maxLength(32)
      ])
    });
  }

  onSubmit() {
    console.log("button clicked");
    console.log(this.loginForm);
  }

}
