import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AddcartService } from './services/addcart.service';
import { Product } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  toast: Product | null = null;
  private timer?: ReturnType<typeof setTimeout>;
  private subs = new Subscription();

  constructor(cartService: AddcartService, router: Router) {
    this.subs.add(
      cartService.added$.subscribe((product) => {
        this.toast = product;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => (this.toast = null), 2800);
      })
    );

    this.subs.add(
      router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => (this.toast = null))
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    clearTimeout(this.timer);
  }
}
