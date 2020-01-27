import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { AuthService } from '../services/auth.service';

@Component({
  template: `Login`
})
export class LoginComponent {
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: '', redirectTo: 'courses', pathMatch: 'full'},
          {path: 'login', component: LoginComponent},
        ]),
      ],
      declarations: [ HeaderComponent, LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('logout logs out', () => {
    const logoutMethod = spyOn(TestBed.get(AuthService), 'logout');
    component.logout();
    expect(logoutMethod).toHaveBeenCalled();
  });

  it('logout redirects to login page', fakeAsync(() => {
    const router = TestBed.get<Router>(Router);
    const location = TestBed.get<Location>(Location);
    router.initialNavigation();

    // implementation specific
    component.logout();
    tick();
    expect(location.path()).toEqual('/login');
  }));
});
