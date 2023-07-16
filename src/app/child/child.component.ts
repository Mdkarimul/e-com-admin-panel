import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {


  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>(); 

  didvote = false;
   vote(agreed:boolean){
    this.voted.emit(agreed);
    this.didvote = true;
   }




}
