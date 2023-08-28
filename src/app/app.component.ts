import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IbnAnwaar';
  constructor(public service: GlobalService) { }
  
}
