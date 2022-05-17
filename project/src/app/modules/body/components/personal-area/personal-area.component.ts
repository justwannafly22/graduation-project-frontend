import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientsService } from 'src/app/modules/clients/services/clients.service';
import { SecondClientsRequestInterface } from 'src/app/shared/interfaces/clients/second-clients-request.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent implements OnInit {
  public clientsFormGroup!:FormGroup;
  public id!:any;
  public orders!:any[];
  constructor(private clientsService:ClientsService,
    private clientsFormBuilder:FormBuilder,
    private persistanceService:PersistanceService,
    ) { }
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm():void{
    this.clientsFormGroup = this.clientsFormBuilder.group({
      id:[''],
      name:[''],
      surname:[''],
      age:[''],
      contactNumber:[''],
      email:[''],
      masterId:[''],
    });
    this.id = 'd070b35e-b5a7-4c75-b144-08da37f66c77'//);//this.persistanceService.get('accountId');
    this.clientsService.getClient(this.id).subscribe(item=>{
      let s = item.fullName.split(" ");
    this.clientsFormGroup.patchValue({
      id:this.id,
      name:s[0],
      surname:s[1],
      age:item.age,
      contactNumber:item.contactNumber,
      email:item.email,
      masterId:item.masterId
    });
    });
  }
  edit(){
    let name = this.clientsFormGroup.value.name;
    let surname = this.clientsFormGroup.value.surname;
    let age = Number(this.clientsFormGroup.value.age);
    let val:SecondClientsRequestInterface = {name:name,surname:surname,age:age,contactNumber:this.clientsFormGroup.value.contactNumber,email:this.clientsFormGroup.value.email, masterId:this.clientsFormGroup.value.masterId};
    this.clientsService.changeClient(val,this.id).subscribe(item=>{
      this.initializeForm();
    });
  }
}
