import { Component, OnInit } from '@angular/core';
import { Columns } from 'src/app/shared/interfaces/columns.interface';
import { RepairsResponseInterface } from 'src/app/shared/interfaces/repairs/repairs-response.interface';
import { RepairsService } from '../../services/repairs.service';

@Component({
  selector: 'app-main-repairs',
  templateUrl: './main-repairs.component.html',
  styleUrls: ['./main-repairs.component.css']
})
export class MainRepairsComponent implements OnInit {
  public repairs!: RepairsResponseInterface[];

  public columns: Columns[] = [
    { headerName: 'Название', dataField: 'name', type: 'text' },
    { headerName: 'Дата', dataField: 'date', type: 'text' },
    { headerName: 'Доп. инфо', dataField: 'advancedInfo', type: 'text' },
    { headerName: 'Статус', dataField: 'status', type: 'text' },
    // { headerName: 'Master', dataField: 'masterId',type: "text" },
  ];
  constructor(private repairsService: RepairsService) { }

  ngOnInit(): void {
    this.repairsService.getRepairs().subscribe((item) => {
      this.repairs = item;
      console.log(this.repairs);
    });
  }

}
