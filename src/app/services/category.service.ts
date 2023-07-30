import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, pipe, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private url:string = "http://localhost:8080/api/admin/category";
  constructor(private http:HttpClient) { }

 

createCategory(data:any):Observable<any>{

return this.http.post<any>(this.url,data);

}

getCategory(){

  return this.http.get<any>(this.url).pipe(
    map(res=>{
      for(let i = 0;i<res.notice.length;i++){
       res.notice[i].category_tags =  res.notice[i].category_tags.split(",");
      }
      return res;
    })
  );
}





}
