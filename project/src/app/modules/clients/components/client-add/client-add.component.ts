import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SecondClientsRequestInterface } from 'src/app/shared/interfaces/clients/second-clients-request.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  public addClientFormGroup!: FormGroup;

  constructor(private persServ:PersistanceService,
    private clientsFormBuilder:FormBuilder,
    private clientsService:ClientsService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm():void{
    this.addClientFormGroup = this.clientsFormBuilder.group({
      name:[''],
      surname:[''],
      age:[''],
      contactNumber:[''],
      email:[''],
      masterId:[''],
    });
      }
  onSub():void{
    //console.log(this.addClientFormGroup.value);
    let finalObj: SecondClientsRequestInterface = this.addClientFormGroup.value;
    finalObj.age = Number(finalObj.age)

    this.clientsService.addClient(finalObj).subscribe();
  }
    back():void{
    this.router.navigate(['/body/clients'])
  }
}