import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  events: string[] = [];
  opened: boolean | undefined = true;
part:string = this.pers.get('part');
  constructor(private router: Router,private pers:PersistanceService) {}
  selectDetails(): void {
    this.router.navigate(['body/details']);
  }
  selectRepairs(): void {
    this.router.navigate(['body/repairs/']);
  }
  selectMasters(): void {
    this.router.navigate(['body/masters']);
  }
  selectClients(): void {
    this.router.navigate(['body/clients']);
  }
  selectReporting(): void {
    this.router.navigate(['body/reporting']);
  }
  selectProducts():void{
    this.router.navigate(['body/products']);
  }
  myRep():void{
    this.router.navigate(['body/my-repairs']);
  }
  myProd():void{
    this.router.navigate(['body/my-product']);
  }
  never():void{
    this.router.navigate(['body/never']);
  }

  ngOnInit(): void {}
}
