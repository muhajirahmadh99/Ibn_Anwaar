import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { AddcartService } from 'src/app/services/addcart.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  constructor(private cartservice: AddcartService, public service: GlobalService) { }

  ngOnInit(): void {
    // this.service.animate('');
    const timeline = gsap.timeline({ defaults: { duration: 0.8 } })
    timeline
      .from('h2', { x: '-100%', ease: 'bounce' })
      .from('.anim', { y: 160, stagger: 0.1, ease: "back" })
  }

  addToCart(data: any) {
    this.cartservice.addtocart(data);
  }
  scrolltop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
