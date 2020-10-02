import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userUrl = 'https://reqres.in/api/users/';
  constructor(private http: HttpClient) { }

  getUser(userId:number):any{
    return this.http.get(this._userUrl + userId);
  }
}
