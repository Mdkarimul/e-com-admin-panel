import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthServicesService } from '../services/auth-services.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthServicesService) {}
   private token!:string;
   private Id?:string|null;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.token =  this.authService.getToken();
    const isLogged = this.authService.isLogged();
     
    if(req.params.has('id')){
      this.Id = req.params.get("id"); 
    }
    const allUrl = [
      "http://localhost:8080/api/admin/category",
      "http://localhost:8080/admin/verify",
      "http://localhost:8080/admin/verify/"+this.Id

    ]
    if(isLogged && (req.url==allUrl[0] || req.url==allUrl[1] || req.url==allUrl[2]  ) ){
      const authReq = req.clone({
        headers: req.headers.set('Authorization',` Bearer ${this.token}`)
      });
       return  next.handle(authReq);
    }
       return next.handle(req);
    
  }
}
