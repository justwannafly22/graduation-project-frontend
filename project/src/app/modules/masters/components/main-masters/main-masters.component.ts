import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Columns } from 'src/app/shared/interfaces/columns.interface';
import { MastersResponseInterface } from 'src/app/shared/interfaces/masters/masters-response.interface';
import { MastersService } from '../../services/masters.service';

@Component({
  selector: 'app-main-masters',
  templateUrl: './main-masters.component.html',
  styleUrls: ['./main-masters.component.css']
})
export class MainMastersComponent implements OnInit {
  public outlet: boolean = true;
  public masters!:MastersResponseInterface[];
  constructor(private masterService: MastersService, private router:Router) { }

  public columns: Columns[] = [
    { headerName: 'ФИО', dataField: 'fullName',type: "text"},
    { headerName: 'Возраст', dataField: 'age',type: "number"},
    { headerName: 'Номер телефона', dataField: 'contactNumber',type: "text" },
  ];
  ngOnInit(): void {
    this.masterService.getMasters().subscribe(item=>{
      this.masters = item
    })
  }
  addMaster():void{
    this.router.navigate(['body/masters/add-master']);
  }

  onActivate = () => (this.outlet = false);
  onDeactivate = () => (this.outlet = true);
}
