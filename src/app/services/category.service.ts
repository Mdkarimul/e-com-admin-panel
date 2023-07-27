import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private url:string = "http://localhost:8080/api/admin/category";
  constructor(private http:HttpClient) { }

 

createCategory(data:any):Observable<any>{

return this.http.post<any>(this.url,data);

}





}
