import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddcartService } from 'src/app/services/addcart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  totalItem = 0;
  menuOpen = false;
  scrolled = false;
  bump = false;

  links = [
    { path: '/home', label: 'Home' },
    { path: '/men', label: 'Men' },
    { path: '/women', label: 'Women' },
    { path: '/kids', label: 'Kids' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  private sub?: Subscription;

  constructor(private cartService: AddcartService) {}

  ngOnInit(): void {
    this.sub = this.cartService.getItems().subscribe(() => {
      const count = this.cartService.getCount();
      if (count > this.totalItem) {
        this.bump = false;
        setTimeout(() => (this.bump = true));
      }
      this.totalItem = count;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 8;
  }
}
