import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/modules/clients/services/clients.service';
import { SecondClientsRequestInterface } from 'src/app/shared/interfaces/clients/second-clients-request.interface';
import { RepairsRequestInterface } from 'src/app/shared/interfaces/repairs/repairs-request.interface';
import { RepairsResponseInterface } from 'src/app/shared/interfaces/repairs/repairs-response.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';
import { RepairsService } from '../../services/repairs.service';

@Component({
  selector: 'app-chosen-rep',
  templateUrl: './chosen-rep.component.html',
  styleUrls: ['./chosen-rep.component.css']
})
export class ChosenRepComponent implements OnInit {
  public clientsFormGroup!: FormGroup;
  public id!:string;
   public status!:any;


  constructor(private persServ:PersistanceService,
    public dialogRef: MatDialogRef<ChosenRepComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder:FormBuilder,
    public dialog: MatDialog,
    private clientsFormBuilder:FormBuilder,
    private repairsService:RepairsService,
    private router:Router,
    private persistanceService: PersistanceService
    ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.id = this.data.user;
  }
/*  id: string,
    name: string,
    date: string,
    advancedInfo: string,
    status: string,
    masterId: string,
    clientId: string */
  initializeForm():void{
    this.clientsFormGroup = this.clientsFormBuilder.group({
      id:[''],
      name:[''],
      date:[''],
      advancedInfo:[''],
      status:[''],
      masterId:[''],
      clientId:['']
    });
    this.id = this.persistanceService.get('accountId');
    this.repairsService.getRepair(this.id).subscribe(item=>{
      //console.log("ClientFromBack",item.email);
      this.status = item.status;
    this.clientsFormGroup.patchValue({
      id:item.id,
      name:item.name,
      date:item.date,
      advancedInfo:item.advancedInfo,
      status:item.status,
      masterId:item.masterId,
      clientId:item.clientId
    });
    });

  }
  onSub():void{
    console.log(this.clientsFormGroup.value);
    
  }
  rm():void{

  }
  edit(){
    
    let val:RepairsResponseInterface = {id:this.id,name:this.clientsFormGroup.value.name,date:this.clientsFormGroup.value.date,advancedInfo:this.clientsFormGroup.value.advancedInfo,status:this.clientsFormGroup.value.status, masterId:this.clientsFormGroup.value.masterId,clientId:this.clientsFormGroup.value.clientId};
    this.repairsService.changeRepair(this.clientsFormGroup.value).subscribe(item=>{
      console.log("item",item);
      this.initializeForm();
      this.dialogRef.close();
      
    });
  }
  back():void{
    this.router.navigate(['/body/clients'])
  }
}
