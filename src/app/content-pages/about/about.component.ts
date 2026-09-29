import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  team = [
    { name: 'Muhajir Ahmadh', role: 'CEO · Founder' },
    { name: 'Sheikh Shiham', role: 'Co-founder' },
    { name: 'Sirajuddeen', role: 'Co-founder' },
    { name: 'Sheikh', role: 'Co-founder' },
  ];

  initials(name: string): string {
    return name
      .split(' ')
      .map((w) => w[0])
      .slice(0, 2)
      .join('');
  }
}
