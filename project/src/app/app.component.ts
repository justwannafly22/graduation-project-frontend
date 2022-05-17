import { Component, OnInit } from '@angular/core';
import { PersistanceService } from './shared/services/persistanse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private persistanseServise: PersistanceService){
  }
  ngOnInit(): void {
    this.persistanseServise.set('part','Client');
  }
}
