import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Output() sidenavMinMax = new EventEmitter<boolean>();

public navControl:boolean = false; 
  sidenavControl(){
    if(this.navControl){
      this.navControl = false;
    }else{
      this.navControl = true;
    }
    this.sidenavMinMax.emit(this.navControl);
    alert("karimul");
  }

}
