import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MastersRequestInterface } from 'src/app/shared/interfaces/masters/masters-request.interface';
import { SecondMastersRequestInterface } from 'src/app/shared/interfaces/masters/second-request.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';
import { MastersService } from '../../services/masters.service';

@Component({
  selector: 'app-chosen-master',
  templateUrl: './chosen-master.component.html',
  styleUrls: ['./chosen-master.component.css']
})
export class ChosenMasterComponent implements OnInit {
  public mastersFormGroup!:FormGroup;
  public id!:string;
  constructor(
    private router: Router,
    private mastersFormBuiler:FormBuilder,
    private persistanceService: PersistanceService,
    private masterService: MastersService
  ) {}
 

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm():void{
    this.mastersFormGroup = this.mastersFormBuiler.group({
      id:[''],
      fullName:[''],
      age:[''],
      contactNumber:[''],
      email:[''],
    });
    this.id = this.persistanceService.get('accountId');
    this.masterService.getMaster(this.id).subscribe(item=>{
    this.mastersFormGroup.patchValue({
      id:this.id,
      fullName:item.fullName,
      age:item.age,
      contactNumber:item.contactNumber,
      email:item.email
    });
    });
  }
  back():void{
    this.router.navigate(['/body/masters']);
  }
  rm():void{
    this.masterService.delMaster(this.id).subscribe();
    this.initializeForm();
  }
  edit():void{
    let name = this.mastersFormGroup.value.fullName;
    name = name.split(" ");
    console.log("name",name);
    let age = Number(this.mastersFormGroup.value.age);
    let val:MastersRequestInterface = {name:name[0],surname:name[1],age:age,contactNumber:this.mastersFormGroup.value.contactNumber,email:this.mastersFormGroup.value.email};
    console.log("val",val);
    this.masterService.changeMaster(val,this.id).subscribe(item=>{
      console.log("item",item);
      
    });
  }
  onSub():void{
    console.log("masters submiting",this.mastersFormGroup.value);
  }
}
