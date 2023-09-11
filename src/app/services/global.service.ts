import { Injectable, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { gsap, TimelineMax, Power0 } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private router: Router) { }

  // MAIN

  maindetails: any = [
    {
      id: 1,
      head: "BLACK THOBE",
      carimg: "assets/man/man1.png",
      price: `<del>$40.00</del> <b>$30.00</b>`,
    },
    {
      id: 2,
      head: "GREEN THOBE",
      carimg: "assets/man/man8.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 3,
      head: "DARK BLACK THOBE",
      carimg: "assets/man/man2.png",
      price: `<del>$80.00</del> <b>$49.00</b>`
    },
    {
      id: 4,
      head: "BLUE THOBE",
      carimg: "assets/man/man2.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
    {
      id: 5,
      head: "PINK SCARF",
      carimg: "assets/women/women.png",
      price: `<del>$40.00</del> <b>$30.00</b>`
    },
    {
      id: 6,
      head: "LIGHT BROWN THOBE",
      carimg: "assets/women/women4.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 7,
      head: "FULL HIJAB-1",
      carimg: "assets/women/women10.png",
      price: `<del>$89.00</del> <b>$49.00</b>`
    },
    {
      id: 8,
      head: "FULL HIJAB-2",
      carimg: "assets/women/women11.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
    {
      id: 9,
      head: "BLUE THOBE",
      carimg: "assets/kids/kid1.png",
      price: `<del>$40.00</del> <b>$36.00</b>`
    },
    {
      id: 10,
      head: "LIGHT GREY THOBE",
      carimg: "/assets/kids/kid4.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 11,
      head: "BLACK THOBE",
      carimg: "assets/kids/kid2.png",
      price: `<del>$89.00</del> <b>$69.00</b>`
    },
    {
      id: 12,
      head: "GREY THOBE",
      carimg: "assets/kids/kid3.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
  ]


  // MEN
  mendetails: any = [
    {
      id: 1,
      head: "BLACK THOBE",
      carimg: "assets/man/man1.png",
      price: `<del>$40.00</del> <b>$36.00</b>`,
    },
    {
      id: 2,
      head: "BLUE THOBE",
      carimg: "assets/man/man2.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 3,
      head: "PURPLE THOBE",
      carimg: "assets/man/man3.png",
      price: `<del>$89.00</del> <b>$69.00</b>`
    },
    {
      id: 4,
      head: "MULTI THOBE",
      carimg: "assets/man/man4.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
    {
      id: 5,
      head: "DARK BLUE THOBE",
      carimg: "assets/man/man5.png",
      price: `<del>$40.00</del> <b>$39.00</b>`
    },
    {
      id: 6,
      head: "BLUE THOBE",
      carimg: "assets/man/man6.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 7,
      head: "EMIRATI BROWN",
      carimg: "assets/man/man7.png",
      price: `<del>$89.00</del> <b>$49.00</b>`
    },
    {
      id: 8,
      head: "FULL HIJAB-2",
      carimg: "assets/man/man8.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
    {
      id: 9,
      head: "BLUE THOBE",
      carimg: "assets/man/man1.png",
      price: `<del>$40.00</del> <b>$36.00</b>`
    },
    {
      id: 10,
      head: "PURPLE THOBE",
      carimg: "assets/man/man3.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 11,
      head: "DARK BLUE THOBE",
      carimg: "assets/man/man2.png",
      price: `<del>$89.00</del> <b>$69.00</b>`
    },
    {
      id: 12,
      head: "BLUE THOBE",
      carimg: "assets/man/man5.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
  ]

  // WOMEN

  womendetails: any = [
    {
      id: 1,
      head: "PAKISTANI BURKA",
      carimg: "assets/women/women8.png",
      price: `<del>$40.00</del> <b>$36.00</b>`,
    },
    {
      id: 2,
      head: "INDIA BURKA",
      carimg: "/assets/women/women5.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 3,
      head: "FULL HIJAB-1",
      carimg: "assets/women/women10.png",
      price: `<del>$89.00</del> <b>$69.00</b>`
    },
    {
      id: 4,
      head: "FULL HIJAB-2",
      carimg: "assets/women/women11.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
    {
      id: 5,
      head: "LIGHT BROWN SCARF",
      carimg: "assets/women/women4.png",
      price: `<del>$40.00</del> <b>$39.00</b>`
    },
    {
      id: 6,
      head: "MILK WHITE SCARF",
      carimg: "assets/women/women5.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 7,
      head: "DARK GREEN SCARF",
      carimg: "assets/women/women6.png",
      price: `<del>$89.00</del> <b>$49.00</b>`
    },
    {
      id: 8,
      head: "LIGHT GREY",
      carimg: "assets/women/women7.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
    {
      id: 9,
      head: "MILK WHITE SCARF",
      carimg: "assets/women/women5.png",
      price: `<del>$40.00</del> <b>$36.00</b>`
    },
    {
      id: 10,
      head: "LIGHT GREY SCARF",
      carimg: "assets/women/women7.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 11,
      head: "PINK SCARF",
      carimg: "assets/women/women.png",
      price: `<del>$89.00</del> <b>$69.00</b>`
    },
    {
      id: 12,
      head: "LIGHT BROWN SCARF",
      carimg: "assets/women/women4.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
  ]


  // KIDS
  kidsdetails: any = [
    {
      id: 1,
      head: "BLUE THOBE",
      carimg: "assets/kids/kid1.png",
      price: `<del>$40.00</del> <b>$39.00</b>`,
    },
    {
      id: 2,
      head: "BLACK THOBE",
      carimg: "assets/kids/kid2.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 3,
      head: "GREY THOBE",
      carimg: "assets/kids/kid4.png",
      price: `<del>$80.00</del> <b>$49.00</b>`
    },
    {
      id: 4,
      head: "MAROON THOBE",
      carimg: "assets/kids/kid5.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
    {
      id: 5,
      head: "GREY THOBE",
      carimg: "assets/kids/kid4.png",
      price: `<del>$40.00</del> <b>$30.00</b>`
    },
    {
      id: 6,
      head: "MAROON THOBE",
      carimg: "assets/kids/kid5.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 7,
      head: "MULTI THOBE-1",
      carimg: "assets/kids/kid6.png",
      price: `<del>$89.00</del> <b>$49.00</b>`
    },
    {
      id: 8,
      head: "MULTI THOBE-2",
      carimg: "assets/kids/kid7.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
    {
      id: 9,
      head: "WHITE THOBE",
      carimg: "assets/kids/kid8.png",
      price: `<del>$40.00</del> <b>$36.00</b>`
    },
    {
      id: 10,
      head: "BLUE THOBE",
      carimg: "assets/kids/kid1.png",
      price: `<del>$25.00</del> <b>$23.99</b>`
    },
    {
      id: 11,
      head: "BLACK THOBE",
      carimg: "assets/kids/kid2.png",
      price: `<del>$89.00</del> <b>$69.00</b>`
    },
    {
      id: 12,
      head: "GREY THOBE",
      carimg: "assets/kids/kid3.png",
      price: `<del>$31.00</del> <b>$25.00</b>`
    },
  ]


  // Animation Code
  // animateOnScroll() {
  //   const faders = document.querySelectorAll(".ht_aos");
  //   console.log("faders ", faders.length)
  //   faders.forEach(entry => {
  //     gsap.set(entry.querySelectorAll(".anim"),
  //       { y: 80, opacity: 0 })
  //   });


  //   const appearOptions = {
  //     threshold: 0,
  //     rootMargin: "0px 0px -250px 0px"
  //   };

  //   const appearOnScroll = new IntersectionObserver(function (
  //     entries,
  //     appearOnScroll
  //   ) {
  //     let i = 0;
  //     let divs = [];
  //     entries.forEach(entry => {
  //       if (!entry.isIntersecting) {
  //         return;
  //       } else {
  //         i++;
  //         let animate = entry.target.getAttribute('data-anim');

  //         if (animate) {
  //           entry.target.classList.add(animate);
  //         } else {
  //           // entry.target.classList.add("appear");
  //           // console.log(entry.target.querySelectorAll(".anim"));
  //           // divs.push(entry.target);

  //           gsap.to(entry.target.querySelectorAll(".anim"),
  //             { y: 0, opacity: 1, stagger: 0.35 })
  //         }
  //         appearOnScroll.unobserve(entry.target);
  //       }
  //     });
  //     // console.log(divs);
  //     // gsap.to(divs, { y: 0, opacity: 1, stagger: 1 })
  //   },
  //     appearOptions);

  //   faders.forEach(fader => {
  //     appearOnScroll.observe(fader);
  //   });

  // }

  // animate(name = '', aduioSync = true) {
  //   //console.log(this.tl)
  //   this.tl.clear();
  //   gsap.ticker.lagSmoothing(0);
  //   this.tl = new TimelineMax();
  //   //console.log(2, this.tl)
  //   //  gsap.to(myDiv, { duration: 2, scrollTo: 250 }); 
  //   let elems;
  //   if (name == '') {
  //     elems = document.querySelectorAll('[data-animatetime]');
  //   } else {
  //     elems = document.querySelectorAll('[data-animatename=' + name + ']');
  //   }
  //   // console.log(elems);
  //   elems.forEach((element: any) => {
  //     if (element['dataset'].animatetype == 'scroll') {
  //       // scroll animation
  //       console.log('scroll', element.id);
  //       this.tl.to(
  //         window,
  //         { scrollTo: '#' + element.id, duration: 0.4, ease: Power0.easeNone },
  //         element['dataset'].animatetime
  //       );
  //     } else {
  //       // slide animation
  //       if (element['dataset'].animatefrom == 'right') {
  //         this.tl.fromTo(
  //           element,
  //           { opacity: 0, x: 100 },
  //           { x: 0, duration: 0.5, opacity: 1 },
  //           element['dataset'].animatetime
  //         );
  //       } else if (element['dataset'].animatefrom == 'left') {
  //         this.tl.fromTo(
  //           element,
  //           { opacity: 0, x: -100 },
  //           { x: 0, duration: 0.5, opacity: 1 },
  //           element['dataset'].animatetime
  //         );
  //       } else if (element['dataset'].animatefrom == 'left-right') {
  //         this.tl.fromTo(
  //           element,
  //           { opacity: 1, x: 0 },
  //           { x: -200, duration: 0.5, opacity: 0 },
  //           element['dataset'].animatetime
  //         );
  //       } else if (element['dataset'].animatefrom == 'fade-in') {
  //         this.tl.fromTo(
  //           element,
  //           { opacity: 0, x: 0 },
  //           { x: 0, duration: 0.5, opacity: 1 },
  //           element['dataset'].animatetime
  //         );
  //       } else if (element['dataset'].animatefrom == 'fade-up') {
  //         this.tl.fromTo(
  //           element,
  //           { opacity: 0, y: 10 },
  //           { x: 0, y: 0, duration: 0.5, opacity: 1 },
  //           element['dataset'].animatetime
  //         );
  //       } else {
  //         this.tl.fromTo(
  //           element,
  //           { opacity: 0, y: -50 },
  //           { y: 0, duration: 0.5, opacity: 1 },
  //           element['dataset'].animatetime
  //         );
  //       }
  //     }
  //     //console.log(aduioSync);
  //     if (aduioSync) {
  //       this.tl.pause();
  //     } else {
  //       this.tl.play();
  //     }

  //     // console.log(element, element['dataset'].animatetime);
  //   });
  // }
}