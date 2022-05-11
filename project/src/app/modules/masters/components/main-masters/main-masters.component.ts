import { Component, OnInit } from '@angular/core';
import { Columns } from 'src/app/shared/interfaces/columns.interface';
import { MastersResponseInterface } from 'src/app/shared/interfaces/masters/masters-response.interface';
import { MastersService } from '../../services/masters.service';

@Component({
  selector: 'app-main-masters',
  templateUrl: './main-masters.component.html',
  styleUrls: ['./main-masters.component.css']
})
export class MainMastersComponent implements OnInit {
  public masters!:MastersResponseInterface[];
  constructor(private masterService: MastersService) { }

  public columns: Columns[] = [
    { headerName: 'FullName', dataField: 'fullName',type: "text"},
    { headerName: 'Age', dataField: 'age',type: "number"},
    { headerName: 'ContactNumber', dataField: 'contactNumber',type: "text" },
  ];
  ngOnInit(): void {
    this.masterService.getMasters().subscribe(item=>{
      this.masters = item
    })
  }
}
