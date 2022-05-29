import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/modules/auth/services/auth.service';
import { SecondClientsRequestInterface } from 'src/app/shared/interfaces/clients/second-clients-request.interface';
import { MastersRequestInterface } from 'src/app/shared/interfaces/masters/masters-request.interface';
import { SecondMastersRequestInterface } from 'src/app/shared/interfaces/masters/second-request.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';
import { MastersService } from '../../services/masters.service';

@Component({
  selector: 'app-master-add',
  templateUrl: './master-add.component.html',
  styleUrls: ['./master-add.component.css']
})
export class MasterAddComponent implements OnInit {
  public formGroup!:FormGroup;
  public id!:string;
  constructor(
    private router: Router,
    private mastersFormBuiler:FormBuilder,
    private persistanseService: PersistanceService,
    private masterService: MastersService,
    private authService:AuthServices
  ) {}

  ngOnInit(): void {
    this.initializeForm();

  }
  initializeForm():void{
    this.formGroup = this.mastersFormBuiler.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.max(100)],
      contactNumber: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
   
  }
  back():void{
    this.router.navigate(['/body/masters']);
  }
 
  onSub():void{

    // let finalObj: MastersRequestInterface = this.mastersFormGroup.value;
    // finalObj.age = Number(finalObj.age)
    // this.masterService.addMaster(finalObj).subscribe();
    // this.router.navigate(['/body/masters']);
    let request: any = {
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
      role: 'MASTER',
    };
    this.authService.registration(request).subscribe((item) => {
      console.log(item.token);
      this.persistanseService.set('accessToken', item.token);
      this.authService.getPermissions(item.token).subscribe((item) => {

        let client: SecondClientsRequestInterface = {
          age: this.formGroup.value.age,
          email: this.formGroup.value.email,
          contactNumber: this.formGroup.value.contactNumber,
          name: this.formGroup.value.name,
          surname: this.formGroup.value.surname,
          attendeeId: item.attendeeId
        };

        this.masterService.addMaster(client).subscribe((item) => {
          console.log(item.fullName);
          this.persistanseService.set('age', item.age);
          this.persistanseService.set('contactNumber', item.contactNumber);
          this.persistanseService.set('email', item.email);
          this.persistanseService.set('fullName', item.fullName);
          this.persistanseService.set('id', item.id);
          this.persistanseService.set('attendeeId', item.attendeeId);
          //this.persistanseService.set('part','Client');
          if(item){
            this.router.navigate(['/body/clients']);
  
          }
        });
      })
    })
  }
}
