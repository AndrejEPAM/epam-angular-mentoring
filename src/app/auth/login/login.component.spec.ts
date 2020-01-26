import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent]
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
});
