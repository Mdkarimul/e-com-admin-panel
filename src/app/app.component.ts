import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskmanager';

  agreed = 0;
  disagree = 0;
  voters = ['Dr. IQ', 'Celeritas', 'Bombasto'];

  onVoted(agreed:boolean){
    if(agreed){
      this.agreed++;
    }else{
      this.disagree++;
    }
  }
}
