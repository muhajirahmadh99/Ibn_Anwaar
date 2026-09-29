import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  model = { firstName: '', lastName: '', email: '', message: '' };
  sent = false;

  submit(f: NgForm) {
    if (f.invalid) {
      f.control.markAllAsTouched();
      return;
    }
    this.sent = true;
  }
}
