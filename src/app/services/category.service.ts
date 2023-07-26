import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private url:string = "http://localhost:8080/api/admin/category";
  constructor(private http:HttpClient) { }


createCategory(data:any){
this.http.post<any>(this.url,data).subscribe((res:any)=>{
  console.log(res);
},
(error)=>{
  console.log(error);
}
);
}



}
