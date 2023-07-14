import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public hero:any[] = ["karimul","sabbir"];
  constructor() { }
}
