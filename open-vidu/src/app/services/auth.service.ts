import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private _router:Router) {
  }

  private _registerUrl = 'https://reqres.in/api/register';
  private _loginUrl = 'https://reqres.in/api/login';

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }


  logOut(){
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  openProfile(){
    this._router.navigate(['/profile']);
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
