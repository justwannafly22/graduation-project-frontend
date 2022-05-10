import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  events: string[] = [];
  opened: boolean | undefined = true;

  constructor(private router: Router) {}
  selectDetails(): void {
    this.router.navigate(['body/details']);
  }
  selectRepairs(): void {
    this.router.navigate(['body/repairs']);
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

  ngOnInit(): void {}
}
