import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userName: string, password: string) {
    localStorage.setItem('logged'+userName, '1');
  }
}
