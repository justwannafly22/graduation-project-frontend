import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  events: string[] = [];
  opened: boolean | undefined = false;

  constructor(private router: Router) {}
  selectEmployees(): void {
    this.router.navigate(['main/employees']);
  }
  selectProjects(): void {
    this.router.navigate(['main/projects']);
  }
  selectCV(): void {
    this.router.navigate(['main/cv']);
  }
  selectNews(): void {
    this.router.navigate(['main/news']);
  }
  ngOnInit(): void {}
}
