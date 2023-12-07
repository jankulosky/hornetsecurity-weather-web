import { Component, OnInit } from '@angular/core';
import { IUser } from './core/models/user';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: IUser = JSON.parse(userString);
    this.authenticationService.setCurrentUser(user);
  }
}
