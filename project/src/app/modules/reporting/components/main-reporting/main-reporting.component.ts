import { Component, DoCheck, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ClientsService } from 'src/app/modules/clients/services/clients.service';
import { DetailsService } from 'src/app/modules/details/services/details.service';
import { MastersService } from 'src/app/modules/masters/services/masters.service';
import { ProductsService } from 'src/app/modules/products/services/product.service';
import { RepairsService } from 'src/app/modules/repairs/services/repairs.service';
import { ClientsResponseInterface } from 'src/app/shared/interfaces/clients/clients-response.interface';
import { DetailResponseInterface } from 'src/app/shared/interfaces/details/detail-response-model.interface';
import { MastersResponseInterface } from 'src/app/shared/interfaces/masters/masters-response.interface';
import { ProductResponseInterface } from 'src/app/shared/interfaces/product/product-response.interface';
import { RepairsResponseInterface } from 'src/app/shared/interfaces/repairs/repairs-response.interface';

@Component({
  selector: 'app-main-reporting',
  templateUrl: './main-reporting.component.html',
  styleUrls: ['./main-reporting.component.css'],
})
export class MainReportingComponent implements OnInit , DoCheck{
  public repairs!: RepairsResponseInterface[];
  public details!: DetailResponseInterface[];
  public masters!: MastersResponseInterface[];
  public clients!: ClientsResponseInterface[];
  public products!: ProductResponseInterface[];

  constructor(private detailsService: DetailsService, private repairsService: RepairsService,
    private mastersService: MastersService, private cliensService: ClientsService, private productsService: ProductsService) {}
  ngDoCheck(): void {
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Детали ', 'Ремонты', 'Мастера', 'Клиенты', 'Техника'],
        datasets: [
          {
            label: 'Reportoings',
            data: [89, this.repairs.length, 3, 29, 70],
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

  ngOnInit(): void {
    this.repairsService.getRepairs().subscribe((item) => {
      this.repairs = item;
      console.log(this.repairs);
    });

    for (let i = 0; i < this.repairs.length; i++){
      let repairId = this.repairs[i].id;
      this.detailsService.getDetails(repairId).subscribe((item) => {
        this.details.concat(item);
        console.log(this.details);
        console.log(item);
      });
    }

    this.mastersService.getMasters().subscribe((item) => {
      this.masters = item;
      console.log(this.masters);
    });
    
    this.cliensService.getClients().subscribe((item) => {
      this.clients = item;
      console.log(this.clients);
    });
    
    this.productsService.getProducts().subscribe((item) => {
      this.products = item;
      console.log(this.products);
    });
  }
}
