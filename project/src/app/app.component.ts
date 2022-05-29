import { Component, OnInit } from '@angular/core';
import { PersistanceService } from './shared/services/persistanse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private persistanseService: PersistanceService){
  }
  ngOnInit(): void {
   //this.persistanseService.set('part','Client');
   //this.persistanseService.set('part','Master');
   //this.persistanseService.set('part','Admin');
   //this.persistanseService.set('accessToken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGRlMjgxMTliZTdlMDAxNmVlYzBiOSIsInJvbGUiOnsibmFtZSI6Im1vZGVyYXRvciIsImlkIjoiNjIwMGRlODViNzI1ZTdmNzkxY2JlZDY0In0sImlhdCI6MTY1MzQ2NTgyOSwiZXhwIjoxNjUzNDY5ODI5fQ.RXpH7cawOq_svkhdTwK9DNA3n2aYC2qdMogPg-RgINI' );
  }
}
