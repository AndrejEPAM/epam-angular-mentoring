import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  template: `Courses`
})
export class CoursesComponent {
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule, 
        FormsModule, 
        RouterTestingModule.withRoutes([
          {path: '', redirectTo: 'courses', pathMatch: 'full'},
          {path: 'courses', component: CoursesComponent},
        ])
      ],
      declarations: [
        CoursesComponent,
        LoginComponent
      ]
    });

    fixture = TestBed.createComponent(LoginComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('form is invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('login does log in', () => {
    const loginMethod = spyOn(TestBed.get(AuthService), 'login');

    // implementation specific
    const email = component.loginForm.get('email');
    if (email) { email.patchValue('ALPHA@BETA.COM'); }
    const password = component.loginForm.get('password');
    if (password) { password.patchValue('1234'); }
    component.onSubmit();
    expect(loginMethod).toHaveBeenCalledWith('ALPHA@BETA.COM', '1234');
  });

  it('login redirects', fakeAsync(() => {
    const router = TestBed.get<Router>(Router);
    const location = TestBed.get<Location>(Location);
    router.initialNavigation();

    // implementation specific
    const email = component.loginForm.get('email');
    if (email) { email.patchValue('ALPHA@BETA.COM'); }
    const password = component.loginForm.get('password');
    if (password) { password.patchValue('1234'); }
    component.onSubmit();
    tick();
    expect(location.path()).toEqual('/courses');
  }));
});
