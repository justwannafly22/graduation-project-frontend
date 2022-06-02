import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsResponseInterface } from 'src/app/shared/interfaces/clients/clients-response.interface';
import { Columns } from 'src/app/shared/interfaces/columns.interface';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-main-clients',
  templateUrl: './main-clients.component.html',
  styleUrls: ['./main-clients.component.css']
})
export class MainClientsComponent implements OnInit {
  public outlet: boolean = true;
  public clients!:ClientsResponseInterface[];
  constructor(private clientService:ClientsService, private router : Router) { }

  public columns: Columns[] = [
    { headerName: 'Имя', dataField: 'fullName',type: "text"},
    { headerName: 'Возраст', dataField: 'age',type: "number"},
    { headerName: 'Номер телефона', dataField: 'contactNumber',type: "text" },
    { headerName: 'Почта', dataField: 'email',type: "text" },
    // { headerName: 'Master', dataField: 'masterId',type: "text" },
  ];
  addClient():void{
    this.router.navigate(['body/clients/add-client']);
  }

 onActivate = () => (this.outlet = false);
  onDeactivate = () => (this.outlet = true);
  ngOnInit(): void {
    this.clientService.getClients().subscribe(item=>{
      this.clients = item;
      console.log( this.clients);
    })
  }

}
