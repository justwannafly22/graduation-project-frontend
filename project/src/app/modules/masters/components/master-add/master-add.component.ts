import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecondMastersRequestInterface } from 'src/app/shared/interfaces/masters/second-request.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';
import { MastersService } from '../../services/masters.service';

@Component({
  selector: 'app-master-add',
  templateUrl: './master-add.component.html',
  styleUrls: ['./master-add.component.css']
})
export class MasterAddComponent implements OnInit {
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
      name:['',Validators.required],
      surname:['',Validators.required],
      age:[''],
      contactNumber:['']
    });
   
  }
  back():void{
    this.router.navigate(['/body/masters']);
  }
 
  onSub():void{
    let finalObj: SecondMastersRequestInterface = this.mastersFormGroup.value;
    finalObj.age = Number(finalObj.age)
    this.masterService.addMaster(finalObj).subscribe();
    this.router.navigate(['/body/masters']);
  }
}
