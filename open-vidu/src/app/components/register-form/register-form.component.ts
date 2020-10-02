import { Component, OnInit, } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router) {
  }

  registerFormData = {
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,12}$/)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required
    ]),
  };

  hasError = true;

  ngOnInit(): void {
  }

  getData() {
    return Object.entries(this.registerFormData).reduce((acc, [key, {value}]) => ({...acc, [key]: value}), {});
  }

  checkError() {
    this.hasError = !Object.values(this.registerFormData).every(({status}) => status === 'VALID');
  }

  submitForm() {
    console.log('submitForm', this.getData());
    this._auth.registerUser(this.getData()).subscribe(res => {
      localStorage.setItem('token', res.token);
      this._router.navigate(['/']);
    }, err => console.log(err));
  }

}
