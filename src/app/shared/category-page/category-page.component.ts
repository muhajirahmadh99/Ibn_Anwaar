import { Component, Input, OnChanges } from '@angular/core';
import { Category, GlobalService, Product } from 'src/app/services/global.service';

type Sort = 'featured' | 'low' | 'high' | 'discount';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnChanges {
  @Input() category!: Category;
  @Input() heading = '';
  @Input() description = '';

  sort: Sort = 'featured';
  products: Product[] = [];

  constructor(private service: GlobalService) {}

  ngOnChanges(): void {
    this.applySort();
  }

  applySort() {
    const list = [...this.service.byCategory(this.category)];
    const off = (p: Product) => 1 - p.price / p.oldPrice;
    if (this.sort === 'low') list.sort((a, b) => a.price - b.price);
    if (this.sort === 'high') list.sort((a, b) => b.price - a.price);
    if (this.sort === 'discount') list.sort((a, b) => off(b) - off(a));
    this.products = list;
  }
}
