import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  model: any = {};

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/');
  }
}
