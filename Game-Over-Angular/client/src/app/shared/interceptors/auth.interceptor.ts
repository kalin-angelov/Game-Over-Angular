import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    const user = this.userService.getUser();

   
    if (user && user.accessToken) {
      request = request.clone({
        setHeaders: {
          'X-Authorization': user.accessToken,
        }
      })
    }

    return next.handle(request);
  }
}
