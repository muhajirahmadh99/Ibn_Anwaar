import { Injectable } from '@angular/core';

export type Category = 'men' | 'women' | 'kids';

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  category: Category;
}

// [name, image, price, oldPrice]
type Row = [string, string, number, number];

function build(category: Category, prefix: string, rows: Row[]): Product[] {
  return rows.map(([name, image, price, oldPrice], i) => ({
    id: `${prefix}${i + 1}`,
    name,
    image,
    price,
    oldPrice,
    category,
  }));
}

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  readonly categories: { key: Category; title: string; subtitle: string; image: string }[] = [
    { key: 'men', title: 'Men', subtitle: 'Thobes & kurtas', image: 'assets/man/man6.png' },
    { key: 'women', title: 'Women', subtitle: 'Hijabs, scarves & burkas', image: 'assets/women/women1.png' },
    { key: 'kids', title: 'Kids', subtitle: 'Little thobes', image: 'assets/kids/kidfront.png' },
  ];

  mendetails: Product[] = build('men', 'm', [
    ['Black Thobe', 'assets/man/man1.png', 36, 40],
    ['Blue Thobe', 'assets/man/man2.png', 23.99, 25],
    ['Purple Thobe', 'assets/man/man3.png', 69, 89],
    ['Multi Thobe', 'assets/man/man4.png', 25, 31],
    ['Dark Blue Thobe', 'assets/man/man5.png', 39, 40],
    ['Sky Blue Thobe', 'assets/man/man6.png', 23.99, 25],
    ['Emirati Brown', 'assets/man/man7.png', 49, 89],
    ['Green Thobe', 'assets/man/man8.png', 25, 31],
  ]);

  womendetails: Product[] = build('women', 'w', [
    ['Pakistani Burka', 'assets/women/women8.png', 36, 40],
    ['Indian Burka', 'assets/women/women9.png', 23.99, 25],
    ['Full Hijab I', 'assets/women/women10.png', 69, 89],
    ['Full Hijab II', 'assets/women/women11.png', 25, 31],
    ['Light Brown Scarf', 'assets/women/women4.png', 39, 40],
    ['Milk White Scarf', 'assets/women/women5.png', 23.99, 25],
    ['Dark Green Scarf', 'assets/women/women6.png', 49, 89],
    ['Light Grey Scarf', 'assets/women/women7.png', 25, 31],
    ['Pink Scarf', 'assets/women/women.png', 69, 89],
  ]);

  kidsdetails: Product[] = build('kids', 'k', [
    ['Blue Thobe', 'assets/kids/kid1.png', 39, 40],
    ['Black Thobe', 'assets/kids/kid2.png', 23.99, 25],
    ['Grey Thobe', 'assets/kids/kid3.png', 25, 31],
    ['Charcoal Thobe', 'assets/kids/kid4.png', 49, 80],
    ['Maroon Thobe', 'assets/kids/kid5.png', 25, 31],
    ['Multi Thobe I', 'assets/kids/kid6.png', 49, 89],
    ['Multi Thobe II', 'assets/kids/kid7.png', 25, 31],
    ['White Thobe', 'assets/kids/kid8.png', 36, 40],
  ]);

  get allProducts(): Product[] {
    return [...this.mendetails, ...this.womendetails, ...this.kidsdetails];
  }

  // Trending picks shown on the home page
  get maindetails(): Product[] {
    const ids = ['m1', 'm8', 'm7', 'm3', 'w10', 'w1', 'w3', 'w5', 'k1', 'k5', 'k4', 'k8'];
    return ids.map((id) => this.findById(id)!).filter(Boolean);
  }

  findById(id: string | null): Product | undefined {
    return this.allProducts.find((p) => p.id === id);
  }

  byCategory(category: Category): Product[] {
    return this.allProducts.filter((p) => p.category === category);
  }
}
