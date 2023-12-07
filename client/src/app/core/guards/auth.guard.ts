import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);

  return authenticationService.currentUser$.pipe(
    map((user) => {
      if (user) {
        return true;
      } else {
        console.error();
        return false;
      }
    })
  );
};
