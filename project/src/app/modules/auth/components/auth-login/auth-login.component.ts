import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/modules/clients/services/clients.service';
import { MastersService } from 'src/app/modules/masters/services/masters.service';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';
import { AuthServices } from '../../services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginComponent implements OnInit {
  loginFormGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientsService,
    private persistanseService: PersistanceService,
    private authService: AuthServices,
    private router: Router,
    private masterService: MastersService) {}

  ngOnInit(): void {
    this.initializeForm();
  }
  public initializeForm(): void {
    console.log('qwe');
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.maxLength(20)],
    });
  }

  // ToDo: revisit.
  public submit() {
    this.authService.login(this.loginFormGroup.value).subscribe((item) => {
      console.log(item.token);
      this.persistanseService.set('accessToken', item.token);
      this.authService.getPermissions(item.token).subscribe((item) => {
        let role = item.roles[0];
        if(role == 'CLIENT'){
          this.clientService.getClientByAttendeeId(item.attendeeId).subscribe((item) => {
            this.persistanseService.set('age', item.age);
            this.persistanseService.set('contactNumber', item.contactNumber);
            this.persistanseService.set('email', item.email);
            this.persistanseService.set('fullName', item.fullName);
            this.persistanseService.set('id', item.id);
            this.persistanseService.set('attendeeId', item.attendeeId);
            this.router.navigate(['/body/never']);
          });
        }
        else if (role == 'MASTER'){
          this.masterService.getMasterByAttendeeId(item.attendeeId).subscribe((item) => {
            this.persistanseService.set('id', item.id);
            this.persistanseService.set('fullName', item.fullName);
            this.persistanseService.set('age', item.age);
            this.persistanseService.set('contactNumber', item.contactNumber);
            this.persistanseService.set('email', item.email);
            this.persistanseService.set('attendeeId', item.attendeeId);
            this.router.navigate(['/body/never']);
          });
          this.persistanseService.set('attendeeId', item.attendeeId);
          this.router.navigate(['/body/masters']);
          // ToDo: move to master control panel.
        }
        else { // ADMIN
          this.persistanseService.set('attendeeId', undefined);
          this.router.navigate(['/body/never']);
        }
      })
    });
  }
}
