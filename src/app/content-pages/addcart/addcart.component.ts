import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddcartService, CartItem } from 'src/app/services/addcart.service';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss'],
})
export class AddcartComponent implements OnInit, OnDestroy {
  items: CartItem[] = [];
  count = 0;
  subtotal = 0;
  savings = 0;
  shipping = 0;
  readonly freeShippingAt = this.cartService.freeShippingAt;
  private sub?: Subscription;

  constructor(private cartService: AddcartService) {}

  ngOnInit(): void {
    this.sub = this.cartService.getItems().subscribe((items) => {
      this.items = items;
      this.count = this.cartService.getCount();
      this.subtotal = this.cartService.getTotalPrice();
      this.savings = this.cartService.getSavings();
      this.shipping = this.cartService.getShipping();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  get total(): number {
    return this.subtotal + this.shipping;
  }

  setQty(item: CartItem, qty: number) {
    this.cartService.setQty(item.product, qty);
  }

  removeitem(item: CartItem) {
    this.cartService.removeCartItems(item.product);
  }

  emptycard() {
    this.cartService.removeAll();
  }
}
