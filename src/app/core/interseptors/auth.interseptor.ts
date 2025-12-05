import {inject} from "@angular/core";
import {
  HttpErrorResponse, HttpEvent,
  HttpHandlerFn,
  HttpRequest
} from "@angular/common/http";
import {LoginService} from "../../auth/sevices/login.service";
import {catchError, Observable, retry, switchMap, throwError} from "rxjs";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const loginService = inject(LoginService);
  const token = localStorage.getItem("access_token");
  const isAuthEndpoint = (url: string) => url.endsWith('/account/login') || url.endsWith('/api/account/refresh');

  if (token && !isAuthEndpoint(req.url)) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req).pipe(
    catchError((err: unknown) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          return loginService.refreshToken().pipe(
            retry({count: 5, delay: 1000}),
            switchMap(ok => {
              if (ok) {
                const newToken = localStorage.getItem("access_token");
                const cloned = req.clone({
                  setHeaders: { Authorization: `Bearer ${newToken}` },
                });
                return next(cloned);
              } else {
                return throwError(() => err);
              }
            }),
            catchError(() => {
              return throwError(() => err);
            }),
          );
        }
      }
      return throwError(() => err);
    }),
  );
}
