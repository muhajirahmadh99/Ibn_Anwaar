import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { AddcartService } from 'src/app/services/addcart.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public router: Router,private cartservice : AddcartService ,public service : GlobalService,public services:GlobalService) { }

  ngOnInit(): void {
    const timeline = gsap.timeline({ defaults:{duration : 1}})
timeline
  .from('h1',{x: '-100%',ease : 'bounce'})
  .from('h2',{y: '-100%',ease : 'bounce'})
  .from('.anim',{y: 160,stagger:0.1,ease : "back"})
  }

  // ngAfterViewInit(): void {
  //   this.services.animateOnScroll();
    
  // }

  //



// addcart(data:any){
//   // console.log(data);
  
//   this.router.navigate(["/addcart", data])
// }

addToCart(data : any){
  this.cartservice.addtocart(data);
}
flipcard = [
  {
    img : "assets/2.svg",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident ipsam perferendis facilis nullaratione, eos consectetur nam ."
  },
  {
    img : "assets/2.svg",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident ipsam perferendis facilis nullaratione, eos consectetur nam ."
  },
  {
    img : "assets/2.svg",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident ipsam perferendis facilis nullaratione, eos consectetur nam ."
  },
  {
    img : "assets/2.svg",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident ipsam perferendis facilis nullaratione, eos consectetur nam ."
  },
  {
    img : "assets/2.svg",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium provident ipsam perferendis facilis nullaratione, eos consectetur nam ."
  }
]
}
