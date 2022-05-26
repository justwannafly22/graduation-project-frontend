import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SecondClientsRequestInterface } from 'src/app/shared/interfaces/clients/second-clients-request.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-chosen-client',
  templateUrl: './chosen-client.component.html',
  styleUrls: ['./chosen-client.component.css']
})
export class ChosenClientComponent implements OnInit {
  public clientsFormGroup!: FormGroup;
  public id!:string;


  constructor(private persServ:PersistanceService,
    private clientsFormBuilder:FormBuilder,
    private clientsService:ClientsService,
    private router:Router,
    private persistanceService: PersistanceService
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm():void{
    this.clientsFormGroup = this.clientsFormBuilder.group({
      id:[''],
      fullName:[''],
      age:[''],
      contactNumber:[''],
      email:[''],
      masterId:[''],
    });
    this.id = this.persistanceService.get('accountId');
    this.clientsService.getClient(this.id).subscribe(item=>{
      console.log("ClientFromBack",item.email);
      
    this.clientsFormGroup.patchValue({
      id:this.id,
      fullName:item.fullName,
      age:item.age,
      contactNumber:item.contactNumber,
      email:item.email,
      masterId:item.attendeeId
    });
    });

  }
  onSub():void{
    console.log(this.clientsFormGroup.value);
    
  }
  rm():void{
    this.clientsService.delClient(this.id).subscribe();
    this.initializeForm();
  }
  edit(){
    let name = this.clientsFormGroup.value.fullName;
    name = name.split(" ");
    let age = Number(this.clientsFormGroup.value.age);
    let val:SecondClientsRequestInterface = {name:name[0],surname:name[1],age:age,contactNumber:this.clientsFormGroup.value.contactNumber,email:this.clientsFormGroup.value.email, masterId:this.clientsFormGroup.value.masterId};
    this.clientsService.changeClient(val,this.id).subscribe(item=>{
      console.log("item",item);
      this.initializeForm();

    });
  }
  back():void{
    this.router.navigate(['/body/clients'])
  }
}
