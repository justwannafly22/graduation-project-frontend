import { Component, OnInit } from '@angular/core';
import { RepairsService } from '../../services/repairs.service';

@Component({
  selector: 'app-main-repairs',
  templateUrl: './main-repairs.component.html',
  styleUrls: ['./main-repairs.component.css']
})
export class MainRepairsComponent implements OnInit {
  public repairs:any;

  constructor(private repairsService: RepairsService) { }

  ngOnInit(): void {
    // this.repairsService.getRepairs().subscribe(item=>{
    //   console.log("repairs",item)
    // })
  }

}
