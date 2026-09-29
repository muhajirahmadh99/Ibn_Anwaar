import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirm = '';

  constructor(private router: Router) {}

  submit(f: NgForm) {
    if (f.invalid || this.password !== this.confirm) {
      f.control.markAllAsTouched();
      return;
    }
    this.router.navigate(['/home']);
  }
}
