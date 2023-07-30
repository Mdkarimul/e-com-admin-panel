import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public message?:string;
  public type?:string;
  constructor() { }

  showMessage(response:any){
    this.message = response.notice;
        this.type = response.res_type;
        setTimeout(()=>{
          this.message = "";
        },4000);
  }
}
