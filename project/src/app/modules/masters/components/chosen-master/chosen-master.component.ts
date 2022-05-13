import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      id:['',Validators.required],
      fullName:[''],
      age:[''],
      contactNumber:['']
    });
    this.id = this.persistanceService.get('accountId');
    this.masterService.getMaster(this.id).subscribe(item=>{
    this.mastersFormGroup.patchValue({
      id:this.id,
      fullName:item.fullName,
      age:item.age,
      contactNumber:item.contactNumber
    })
    })
    console.log(this.id);
    
  }
  back():void{
    this.router.navigate(['/body/masters']);
  }
  onSub():void{
    console.log("masters submiting");
  }
}
