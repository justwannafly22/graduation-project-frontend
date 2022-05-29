import { Component, OnInit } from '@angular/core';
import { RepairsService } from 'src/app/modules/repairs/services/repairs.service';
import { Columns } from 'src/app/shared/interfaces/columns.interface';
import { RepairsResponseInterface } from 'src/app/shared/interfaces/repairs/repairs-response.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';

@Component({
  selector: 'app-my-rep',
  templateUrl: './my-rep.component.html',
  styleUrls: ['./my-rep.component.css']
})
export class MyRepComponent implements OnInit {
  public repairss!: RepairsResponseInterface[];
  public id:string = this.persistanses.get('id');
  public columns: Columns[] = [
    { headerName: 'Название', dataField: 'name', type: 'text' },
    { headerName: 'Дата', dataField: 'date', type: 'text' },
    { headerName: 'Доп. инфо', dataField: 'advancedInfo', type: 'text' },
    { headerName: 'Статус', dataField: 'status', type: 'text' },
    // { headerName: 'Master', dataField: 'masterId',type: "text" },
  ];
  constructor(private repairsService: RepairsService,private persistanses:PersistanceService) { }

  ngOnInit(): void {
    console.log("123");
    
    this.repairsService.getRepairByClient(this.id).subscribe((item) => {
      this.repairss = item;
      console.log("my-rep",this.repairss);
    });
  }

}
