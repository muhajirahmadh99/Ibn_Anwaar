import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddcartService } from 'src/app/services/addcart.service';

@Component({
  selector: 'app-cod',
  templateUrl: './cod.component.html',
  styleUrls: ['./cod.component.scss'],
})
export class CodComponent {
  method: 'cod' | 'online' = 'cod';
  form = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    state: '',
    pincode: '',
  };

  constructor(private router: Router, private cartService: AddcartService) {}

  submit(f: NgForm) {
    if (f.invalid) {
      f.control.markAllAsTouched();
      return;
    }
    if (this.method === 'online') {
      this.router.navigate(['/pay']);
    } else {
      this.cartService.removeAll();
      this.router.navigate(['/regards']);
    }
  }
}
