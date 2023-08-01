import { Component,ElementRef,ViewChild, OnInit, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {


  
constructor (private elementRef:ElementRef){

}
ngOnInit(): void {
  const native = this.elementRef.nativeElement;
  console.log(native);
}



}
