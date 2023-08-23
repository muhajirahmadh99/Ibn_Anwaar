import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AddcartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  mobileWidth = 770;
  isMobile = true;
  constructor(private router: Router) {

  
    // if (document.body.clientWidth <= this.mobileWidth) {
    this.isMobile = ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/)) ? true : false;
    console.log(this.isMobile)
    // }
  }

  getProducts() {
    return this.productList.asObservable();
  }

  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtocart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice() : number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItems(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAll(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }


}
