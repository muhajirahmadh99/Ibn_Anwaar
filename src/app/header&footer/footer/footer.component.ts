import { Component, OnInit, HostListener } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { gsap , TimelineMax } from 'gsap';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

//Data Binding//

export class FooterComponent {
  constructor(public service: GlobalService) { }


  isShow: any = 'boolean';
  topPosToStartShowing = 300;

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  // Animation
  ngOnInit(): void {
    const timeline = new TimelineMax({repeat:-1});
    timeline

      .to(".arrow", .9, { transformOrigin: "50% 100%", scaleY: 1.1, yoyo: true, repeat: 1})
      .to(".arrow", .20, { x: -400, ease: Circ.easeOut, yoyo: true, repeat: 1 })
  }


}

