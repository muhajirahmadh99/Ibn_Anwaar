import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from './global.service';

export interface CartItem {
  product: Product;
  qty: number;
}

@Injectable({
  providedIn: 'root',
})
export class AddcartService {
  readonly freeShippingAt = 50;
  readonly shippingFee = 4.99;

  private items: CartItem[] = [];
  private readonly items$ = new BehaviorSubject<CartItem[]>([]);

  /** Emits the product each time something is added, for the "added to cart" toast. */
  readonly added$ = new Subject<Product>();

  getItems() {
    return this.items$.asObservable();
  }

  addtocart(product: Product, qty = 1) {
    const existing = this.items.find((i) => i.product.id === product.id);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({ product, qty });
    }
    this.emit();
    this.added$.next(product);
  }

  setQty(product: Product, qty: number) {
    if (qty <= 0) {
      this.removeCartItems(product);
      return;
    }
    const item = this.items.find((i) => i.product.id === product.id);
    if (item) {
      item.qty = qty;
      this.emit();
    }
  }

  removeCartItems(product: Product) {
    this.items = this.items.filter((i) => i.product.id !== product.id);
    this.emit();
  }

  removeAll() {
    this.items = [];
    this.emit();
  }

  getCount(): number {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  }

  getSavings(): number {
    return this.items.reduce((sum, i) => sum + (i.product.oldPrice - i.product.price) * i.qty, 0);
  }

  getShipping(): number {
    const subtotal = this.getTotalPrice();
    return subtotal === 0 || subtotal >= this.freeShippingAt ? 0 : this.shippingFee;
  }

  private emit() {
    this.items$.next([...this.items]);
  }
}
