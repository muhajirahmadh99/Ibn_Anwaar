import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { AddcartService } from 'src/app/services/addcart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private cartService : AddcartService) {
   }

  ngOnInit(): void {
    const timeline = gsap.timeline({ defaults:{duration : 1}})
timeline
  // .from('img',{x: '-100%',ease : 'bounce'})
  // .from('.img',{y: 160,ease : "back"})
  // .from('.navbar',{x: '-100%',ease : 'bounce'})
  // .from(".nav-link", {rotation: -360, x: -100,})
  // .from('.nav-link,.btn',{y: 2,x:-14,stagger:0.1,ease : "back"})
  // .from(".btn", {rotation: -360, y: -100,});

  this.cartService.getProducts()
  .subscribe(res =>{ 
    this.totalItem = res.length
  })
  }
  
  myname = "Welcome muhajir"
  welcome(name: any){
    alert(name)
  }

  
}
