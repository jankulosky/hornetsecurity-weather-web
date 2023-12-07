import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private baseUrl = 'https://localhost:7210/api';

  get baseEndpoint(): string {
    return this.baseUrl;
  }

  get accountEndpoint(): string {
    return 'auth';
  }

  get loginEndpoint(): string {
    return 'login';
  }

  get registerEndpoint(): string {
    return 'register';
  }

  get weatherEndpoint(): string {
    return 'weather';
  }
}
