import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientsService } from 'src/app/modules/clients/services/clients.service';
import { DialogForMaster } from 'src/app/shared/components/dialog/dialog-virtual-cv-for-master/dialog-master.component';
import { DialogVirtualCvComponent } from 'src/app/shared/components/dialog/dialog-virtual-cv/dialog-virtual-cv.component';
import { SecondClientsRequestInterface } from 'src/app/shared/interfaces/clients/second-clients-request.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';

@Component({
  selector: 'app-personal-areaa',
  templateUrl: './personal-areaa.component.html',
  styleUrls: ['./personal-areaa.component.css']
})
export class PersonalAreaaComponent implements OnInit {
  public currentRole = this.persistanceService.get('part');
  public currentDataByApplication:any;
  public displayDialog:boolean = false;
public clientsFormGroup!:FormGroup;
  public id!:any;
  public orders!:any[];
  constructor(private clientsService:ClientsService,
    private clientsFormBuilder:FormBuilder,
    private persistanceService:PersistanceService,
    public dialog: MatDialog
    ) { }
  ngOnInit(): void {
    this.initializeForm();
    this.currentDataByApplication = "qwe";
  }
  initializeForm():void{
    this.clientsFormGroup = this.clientsFormBuilder.group({
      id:[''],
      name:[''],
      surname:[''],
      age:[''],
      contactNumber:[''],
      email:[''],
    });
    this.id = this.persistanceService.get('id')//);//this.persistanceService.get('accountId');
    // this.clientsService.getClient(this.id).subscribe(item=>{
      let fullName = this.persistanceService.get('fullName');
      let s = fullName.split(" ");
      let age = this.persistanceService.get('age');
      let contactNumber = this.persistanceService.get('contactNumber');
      let email = this.persistanceService.get('email');
    this.clientsFormGroup.patchValue({
      id:this.id,
      name:s[0],
      surname:s[1],
      age:age,
      contactNumber:contactNumber,
      email:email,
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
  appClient(): void{
    const dialogRef = this.dialog.open(DialogVirtualCvComponent, {
      width: 'auto',
      data: { user: this.id, data: this.currentDataByApplication },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
  appMaster(): void{
    const dialogRef = this.dialog.open(DialogForMaster, {
      width: 'auto',
      data: { user: this.id, data: this.currentDataByApplication },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}