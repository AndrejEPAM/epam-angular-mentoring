import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
  ) {
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
    console.log('button clicked', this.loginForm.value);
    const value = this.loginForm.value;
    this.authService.login(value.email, value.password);
  }

}
