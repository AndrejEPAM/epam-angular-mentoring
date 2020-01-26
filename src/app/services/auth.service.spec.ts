import { AuthService, key } from './auth.service';
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
    spyOn(localStorage, 'removeItem').and.callFake(function (key) {
      delete store[key];
    });
  });
  
  it('should be created', () => {
    const service: AuthService = new AuthService();
    expect(service).toBeTruthy();
  });

  it('login() should store login info in LocalStorage', () => {
    const service: AuthService = new AuthService();
    service.login('USER', 'PASSWORD');
    expect(localStorage.setItem).toHaveBeenCalled(); // not a real test
  });
  
  it('logout() should wipe token from LocalStorage', () => {
    const service: AuthService = new AuthService();
    service.logout();
    expect(localStorage.removeItem).toHaveBeenCalled(); // not a real test
  });

  it('isAuthenticated() should return user status', () => {
    const service: AuthService = new AuthService();
    expect(service.isAuthenticated('USER')).toBe(false);
    localStorage.setItem(key, JSON.stringify({ userName: 'USER', token: 'X' })); // tight coupling
    expect(service.isAuthenticated('USER')).toBe(true);
  });

  it('getUserInfo() should return stored user name', () => {
    const service: AuthService = new AuthService();
    localStorage.setItem(key, JSON.stringify({ userName: 'USER', token: 'X' })); // tight coupling
    expect(service.getUserInfo().userName).toBe('USER');
  });


});
