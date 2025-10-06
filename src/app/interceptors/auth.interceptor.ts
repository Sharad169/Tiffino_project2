import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Retrieve the token from sessionStorage
  const authToken = sessionStorage.getItem('token'); 

  // If a token exists, clone the request and add the Authorization header
  if (authToken) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next(authReq);
  }

  // If no token, pass the request as is
  return next(req);
};