import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddcartService, CartItem } from 'src/app/services/addcart.service';

@Component({
  selector: 'app-mini-summary',
  templateUrl: './mini-summary.component.html',
  styleUrls: ['./mini-summary.component.scss'],
})
export class MiniSummaryComponent implements OnInit, OnDestroy {
  items: CartItem[] = [];
  subtotal = 0;
  shipping = 0;
  private sub?: Subscription;

  constructor(private cartService: AddcartService) {}

  ngOnInit(): void {
    this.sub = this.cartService.getItems().subscribe((items) => {
      this.items = items;
      this.subtotal = this.cartService.getTotalPrice();
      this.shipping = this.cartService.getShipping();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
