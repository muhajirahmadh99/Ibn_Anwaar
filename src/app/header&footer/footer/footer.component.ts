import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
// export class FooterComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

//Data Binding//

export class FooterComponent{
  year = '2020 Onclick Real Estate Division';
  name = 'DESIGNED BY : IBN ANWAR All Rights Reserved';

  getcopy(){
              return 'Copyright';
  }
}

