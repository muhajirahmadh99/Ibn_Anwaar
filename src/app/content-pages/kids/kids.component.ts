import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { AddcartService } from 'src/app/services/addcart.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  constructor(private cartservice : AddcartService,public service : GlobalService) { }

  ngOnInit(): void {
    const timeline = gsap.timeline({ defaults:{duration : 0.8}})
    timeline
      .from('h2',{y: '-100%',ease : 'bounce'})
      .from('.anim',{x: -160,stagger:0.1,ease : "back"})
  }

addToCart(data : any){
  this.cartservice.addtocart(data);
}


}
