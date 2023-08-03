import { Component,ElementRef,ViewChild, OnInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

@Output() sideNav = new EventEmitter<boolean>(); 
public controlNav:boolean = false;
constructor (private elementRef:ElementRef){

}
ngOnInit(): void {
  const native = this.elementRef.nativeElement;
  console.log(native);
}

controlSidenav():void {

  this.sideNav.emit(true);

}



}
