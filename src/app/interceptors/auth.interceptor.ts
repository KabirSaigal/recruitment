import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('authToken'); // Get token from local storage

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });
  return next(clonedRequest);
};
