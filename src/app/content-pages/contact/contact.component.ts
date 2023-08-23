import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
// export class ContactComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// // }

//  property binding 
export class ContactComponent{

  isDisabled:boolean = true;
  searchvalue:string = "34";
  name = "type the reason";

  changename(){
    this.searchvalue = '56';
  }

}