import { Component } from '@angular/core';

@Component({
  selector: 'app-regards',
  templateUrl: './regards.component.html',
  styleUrls: ['./regards.component.scss'],
})
export class RegardsComponent {
  orderNo = Math.random().toString(36).slice(2, 12).toUpperCase();
}
