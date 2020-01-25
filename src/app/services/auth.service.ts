import { Injectable } from '@angular/core';

const prefix = 'logged';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userName: string, password: string) {
    localStorage.setItem(prefix+userName, '1');
  }

  logout(userName: string) {
    localStorage.removeItem(prefix+userName);
  }
}
