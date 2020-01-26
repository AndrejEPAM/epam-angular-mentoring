import { Injectable } from '@angular/core';

export const key = 'loggedIn';
export type UserLogin = {
  userName: string,
  token: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userName: string, password: string) {
    localStorage.setItem(key, JSON.stringify({ userName, token: '1'}));
  }

  logout() {
    localStorage.removeItem(key);
  }

  isAuthenticated() {
    const storedData = localStorage.getItem(key);
    if (!storedData) { return false; }
    const userLogin: UserLogin = JSON.parse(storedData);
    return userLogin ? !!userLogin.userName : false;
  }

  getUserInfo(): UserLogin {
    const loggedInInfo = localStorage.getItem(key);
    return loggedInInfo ? JSON.parse(loggedInInfo) : {}
  }
}
