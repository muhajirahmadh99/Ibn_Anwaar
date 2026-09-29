import { Component } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent {
  current = 2;
  expected = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000);

  steps = [
    { icon: 'bi-bag-check', title: 'Order confirmed', text: 'We have received your order' },
    { icon: 'bi-gear', title: 'Processing', text: 'Your items are being packed' },
    { icon: 'bi-patch-check', title: 'Quality check', text: 'Every piece is inspected' },
    { icon: 'bi-truck', title: 'Dispatched', text: 'On its way to you' },
    { icon: 'bi-house-door', title: 'Delivered', text: 'Enjoy your purchase' },
  ];
}
