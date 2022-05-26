import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/modules/clients/services/clients.service';
import { SecondClientsRequestInterface } from 'src/app/shared/interfaces/clients/second-clients-request.interface';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';
import { AuthServices } from '../../services/auth.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css'],
})
export class AuthRegisterComponent implements OnInit {
  public formGroup!: FormGroup;
  leftBtnAfter: boolean = true;
  displayCompany: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServices,
    private clientService: ClientsService,
    private persistanseService: PersistanceService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  public initializeForm(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.max(100)],
      contactNumber: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }
  public toggle = (): void => {
    this.leftBtnAfter = false;
    this.displayCompany == false
      ? (this.displayCompany = true)
      : (this.displayCompany = false);
  };
  public submit() {
    this.formGroup.value.contactNumber = `${this.formGroup.value.contactNumber}`;
    console.log('register', this.formGroup.value);
    let request: any = {
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
      role: 'CLIENT',
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

        this.clientService.addClient(client).subscribe((item) => {
          console.log(item.fullName);
          this.persistanseService.set('age', item.age);
          this.persistanseService.set('contactNumber', item.contactNumber);
          this.persistanseService.set('email', item.email);
          this.persistanseService.set('fullName', item.fullName);
          this.persistanseService.set('id', item.id);
          this.persistanseService.set('attendeeId', item.attendeeId);
          this.persistanseService.set('part','Client');
          if(item){
            this.router.navigate(['/body/clients']);
  
          }
        });
      })
    });
  }
}
