import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddcartService } from 'src/app/services/addcart.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss'],
})
export class PayComponent {
  tab: 'card' | 'upi' = 'upi';
  upiApp = 'gpay';
  upiApps = [
    { key: 'gpay', label: 'Google Pay', logo: 'assets/gpay.jpeg' },
    { key: 'phonepe', label: 'PhonePe', logo: 'assets/phonepe.jpeg' },
    { key: 'paytm', label: 'Paytm', logo: 'assets/paytm.jpeg' },
  ];
  card = { name: '', number: '', exp: '', cvv: '' };
  upiId = '';

  constructor(private router: Router, private cartService: AddcartService) {}

  get total(): number {
    return this.cartService.getTotalPrice() + this.cartService.getShipping();
  }

  formatCard() {
    const digits = this.card.number.replace(/\D/g, '').slice(0, 16);
    this.card.number = digits.replace(/(.{4})/g, '$1 ').trim();
  }

  submit(f: NgForm) {
    if (f.invalid) {
      f.control.markAllAsTouched();
      return;
    }
    this.cartService.removeAll();
    this.router.navigate(['/regards']);
  }
}
