import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IUser } from '../models/user';
import { SettingsService } from '../settings/settings.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSource = new BehaviorSubject<IUser | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(
    private settingsService: SettingsService,
    private http: HttpClient
  ) {}

  login(model: any) {
    return this.http
      .post<IUser>(
        `${this.settingsService.baseEndpoint}/${this.settingsService.accountEndpoint}/${this.settingsService.loginEndpoint}`,
        model
      )
      .pipe(
        map((response: IUser) => {
          const user = response;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
  }

  register(model: any) {
    return this.http
      .post<IUser>(
        `${this.settingsService.baseEndpoint}/${this.settingsService.accountEndpoint}/${this.settingsService.registerEndpoint}`,
        model
      )
      .pipe(
        map((response) => {
          const user = response;
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
  }

  setCurrentUser(user: IUser) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
