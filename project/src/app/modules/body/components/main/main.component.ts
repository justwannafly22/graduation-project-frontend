import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PersistanceService } from 'src/app/shared/services/persistanse.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  public part?:string = this.persServ.get('part');
  constructor(private persServ:PersistanceService){

  }
  ngOnInit(): void {}
}
