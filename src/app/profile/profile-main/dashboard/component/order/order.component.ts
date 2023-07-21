import { Component } from '@angular/core';
import { Chart,Colors } from 'chart.js/auto';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {


  title = 'ng-chart';
 
  chart: any = [];
 
  constructor() {}

  ngOnInit() {
    Chart.register(Colors);
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange',],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max:30
          },
          x:{
            max:6
          }
        },
        plugins:{
          legend:{
            display:true
          },
          tooltip:{
            enabled:true
          }
        }
      },
    });
  }



}
