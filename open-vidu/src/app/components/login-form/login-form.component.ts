import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router) {
  }

  loginFormData = {
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,12}$/)
    ])
  };

  hasError = true;

  ngOnInit(): void {
  }

  getData() {
    return Object.entries(this.loginFormData).reduce((acc, [key, {value}]) => ({...acc, [key]: value}), {});
  }

  checkError() {
    this.hasError = !Object.values(this.loginFormData).every(({status}) => status === 'VALID');
  }

  submitForm() {
    console.log('submitForm', this.getData());
    this._auth.loginUser(this.getData()).subscribe(res => {
      localStorage.setItem('token', res.token);
      this._router.navigate(['/']);
    }, err => console.log(err));
  }
}
