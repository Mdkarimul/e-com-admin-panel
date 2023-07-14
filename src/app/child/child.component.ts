import { Component, Input } from '@angular/core';
import { HeroService } from '../services/hero.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() hero! : HeroService;
  @Input("master")  masterName = ''; 

}
