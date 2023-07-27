import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  validate_array:string[] = [];

  constructor() { }

  //check error validation
checkError(value: any): boolean {
  // Perform the necessary logic to check if the value exists in the array
  return this.validate_array.includes(value);
}
}
