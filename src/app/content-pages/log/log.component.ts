import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent {
  email = '';
  password = '';
  remember = true;
  show = false;

  constructor(private router: Router) {}

  submit(f: NgForm) {
    if (f.invalid) {
      f.control.markAllAsTouched();
      return;
    }
    this.router.navigate(['/home']);
  }
}
