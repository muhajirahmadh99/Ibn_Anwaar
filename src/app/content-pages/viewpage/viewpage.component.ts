import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddcartService } from 'src/app/services/addcart.service';
import { GlobalService, Product } from 'src/app/services/global.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.scss'],
})
export class ViewpageComponent implements OnInit, OnDestroy {
  product?: Product;
  related: Product[] = [];
  qty = 1;
  sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  size = 'M';
  private sub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GlobalService,
    private cartService: AddcartService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      this.product = this.service.findById(params.get('id'));
      this.qty = 1;
      this.related = this.product
        ? this.service.byCategory(this.product.category).filter((p) => p.id !== this.product!.id).slice(0, 4)
        : [];
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  get discount(): number {
    return this.product ? Math.round((1 - this.product.price / this.product.oldPrice) * 100) : 0;
  }

  addToCart() {
    if (this.product) this.cartService.addtocart(this.product, this.qty);
  }

  buyNow() {
    this.addToCart();
    this.router.navigate(['/addcart']);
  }
}
