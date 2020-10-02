import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:any = {};

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this._userService.getUser(10).subscribe(res => {
      this.user = res;
      console.log(this.user);
    }, err => console.warn(err));
  }

}
