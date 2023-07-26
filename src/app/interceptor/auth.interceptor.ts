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
   console.log(this.token);
    const isLogged = this.authService.isLogged();
    console.log(req.url);
  
    if(isLogged){
      const authReq = req.clone({
        headers: req.headers.set('Authorization',"thiskarimul")
      });
      return next.handle(authReq).pipe(
        catchError((error)=>{
          console.log(error);
          return throwError(error);
        })
      );
    }
       return next.handle(req);
    
  }
}
