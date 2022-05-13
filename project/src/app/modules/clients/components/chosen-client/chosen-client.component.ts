import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router:Router
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
    })
  }
  onSub():void{

  }
  back():void{
    this.router.navigate(['/body/clients'])
  }
}
