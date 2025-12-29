import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('🔥 Auth Interceptor Triggered');

  const router = inject(Router);
  const token = sessionStorage.getItem('token');
  const loginTime = Number(sessionStorage.getItem('loginTime'));

  // ⏱ TEST: 10 seconds
  const SESSION_TIME = 60 * 60 * 1000;

  if (token && loginTime) {
    const elapsed = Date.now() - loginTime;
    console.log('⏳ Elapsed Time:', elapsed);

    if (elapsed > SESSION_TIME) {
      console.log('❌ SESSION EXPIRED');

      sessionStorage.clear();
      router.navigate(['/login']);

      return throwError(() => new Error('Session expired'));
    }

    // ✅ token valid → attach
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        sessionStorage.clear();
        router.navigate(['/']);
      }
      return throwError(() => err);
    })
  );
};
