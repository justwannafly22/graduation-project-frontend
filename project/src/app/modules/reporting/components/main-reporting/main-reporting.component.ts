import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-main-reporting',
  templateUrl: './main-reporting.component.html',
  styleUrls: ['./main-reporting.component.css'],
})
export class MainReportingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Детали ', 'Починки', 'Мастера', 'Клиенты', 'Техника'],
        datasets: [
          {
            label: 'Reportoings',
            data: [89, 100, 3, 29, 70],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
