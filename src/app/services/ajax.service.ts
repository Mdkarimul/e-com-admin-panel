import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError,Subscriber } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  public url:string = "http://localhost:8080/admin";
  constructor(private http:HttpClient,private router:Router) {
 
   }

getAdmin(): any{

  // const url = "http://localhost:8080/admin";
  // return  this.http.get<any>(url);
}

createAdmin(data:any):any{
  return this.http.post<any>(`${this.url}/signup`,data);
}

loginAdmin(data:any):Observable<any>{
 return this.http.post<any>(`${this.url}/login`,data);
}


}
