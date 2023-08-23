import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddcartComponent } from '../addcart/addcart.component';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.scss']
})
export class ViewpageComponent implements OnInit {

  constructor(private param : ActivatedRoute,private cartservice : AddcartComponent) { }
  getmenuid : any;
  menudata : any;

  ngOnInit() : void {

    this.getmenuid = this.param.snapshot.paramMap.get('id');
    // console.log(this.getmenuid,'getmenu');

    if(this.getmenuid)
    {
      this.menudata = this.cartservice.product.filter((value:any)=>{
        return value.id == this.getmenuid;
      })
    }

  }

}
