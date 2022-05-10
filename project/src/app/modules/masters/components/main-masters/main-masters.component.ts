import { Component, OnInit } from '@angular/core';
import { MastersService } from '../../services/masters.service';

@Component({
  selector: 'app-main-masters',
  templateUrl: './main-masters.component.html',
  styleUrls: ['./main-masters.component.css']
})
export class MainMastersComponent implements OnInit {
  public masters!:any[];
  constructor(private masterService: MastersService) { }

  ngOnInit(): void {
    this.masterService.getMasters().subscribe(item=>{
      console.log("masters",item);
      this.masters = item
     // this.masters = 
    })
  }

}
