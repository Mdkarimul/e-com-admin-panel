import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthServicesService } from '../services/auth-services.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthServicesService) {}
   private token!:string;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.token =  this.authService.getToken();
    const isLogged = this.authService.isLogged();
    const allUrl = [
      "http://localhost:8080/api/admin/category",
      "http://localhost:8080/admin/verify"

    ]
    if(isLogged && (req.url==allUrl[0] || req.url==allUrl[1] ) ){
      const authReq = req.clone({
        headers: req.headers.set('Authorization',` Bearer ${this.token}`)
      });
      return next.handle(authReq).pipe(
        catchError((error)=>{
          return throwError(()=> new Error(error));
        })
      );
    }
       return next.handle(req);
    
  }
}
