import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();

  perks = [
    { icon: 'bi-truck', title: 'Delivery across India', text: 'Shipped to your doorstep' },
    { icon: 'bi-cash-coin', title: 'Cash on delivery', text: 'Pay when it arrives' },
    { icon: 'bi-arrow-repeat', title: 'Easy returns', text: 'Within 7 days' },
    { icon: 'bi-shield-check', title: 'Secure payments', text: 'UPI, cards & wallets' },
  ];
}
