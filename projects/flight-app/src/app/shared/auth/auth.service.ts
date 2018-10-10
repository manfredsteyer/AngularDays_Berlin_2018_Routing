import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: string = null;

  constructor() { }

  login(): void {
    this.userName = 'Max';
  }

  logout(): void {
    this.userName = null;
  }

}
