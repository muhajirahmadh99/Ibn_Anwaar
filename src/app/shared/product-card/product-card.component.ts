import { Component, Input } from '@angular/core';
import { AddcartService } from 'src/app/services/addcart.service';
import { Product } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  liked = false;

  constructor(private cartService: AddcartService) {}

  get discount(): number {
    const { price, oldPrice } = this.product;
    return oldPrice > price ? Math.round((1 - price / oldPrice) * 100) : 0;
  }

  addToCart() {
    this.cartService.addtocart(this.product);
  }
}
