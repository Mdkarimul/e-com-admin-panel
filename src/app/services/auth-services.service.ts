import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor() { }

  isLogged(){
   return !!localStorage.getItem("__admin");
  }
}
