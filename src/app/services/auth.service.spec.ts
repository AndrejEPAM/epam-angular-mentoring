import { AuthService } from './auth.service';
import { getLocaleDayNames } from '@angular/common';

describe('AuthService', () => {
  beforeEach(function () {
    let store:{[key: string]: string} = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return store[key] = value + '';
    });
    spyOn(localStorage, 'clear').and.callFake(function () {
        store = {};
    });
  });
  
  it('should be created', () => {
    const service: AuthService = new AuthService();
    expect(service).toBeTruthy();
  });

  it('login() should store login info in LocalStorage', () => {
    const service: AuthService = new AuthService();
    service.login('USER', 'PASSWORD');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
