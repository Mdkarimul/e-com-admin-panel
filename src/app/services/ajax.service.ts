import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError,Subscriber } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http:HttpClient,private router:Router) {
    this.getAdmin();
   }

getAdmin(): any{
  this.router.events.subscribe((event)=>{
    console.log(event);
  });
  // const url = "http://localhost:8080/admin";
  // return  this.http.get<any>(url);
}

createAdmin(data:any):any{
  const url = "http://localhost:8080/admin";
  return this.http.post<any>(url,data);
}


}
