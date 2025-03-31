import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedIn = localStorage.getItem('currentUser');
  if (loggedIn != undefined) {
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
};