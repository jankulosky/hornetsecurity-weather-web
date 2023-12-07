import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  model: any = {};
  registerMode = false;

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authenticationService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/weather');
        this.model = {};
      },
    });
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
