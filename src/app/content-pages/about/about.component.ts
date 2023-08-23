import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const timeline = gsap.timeline({ defaults:{duration : 0.8}})
    timeline
      
      .from('.row',{y: 160,stagger:0.1,ease : "back"})
  }

}
