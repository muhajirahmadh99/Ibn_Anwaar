import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { AddcartService } from 'src/app/services/addcart.service';
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {
  // value: any;

  public product : any = [];

  public grandTotal ! : number;
  constructor(public route: ActivatedRoute,public cartService : AddcartService) { }
  // getmenuid : any;
  // menudata : any;
  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res => {
      this.product = res ;
      this.grandTotal = this.cartService.getTotalPrice();
    })









    // this.value = this.route.snapshot.paramMap.get('data');
    // console.log(this.value);




    // if(this.getmenuid)
    // {
    //   this.menudata = this.service.cardetails.filter((value)=>{
    //     return value.id == this.getmenuid;
    //   })
    // }



    // this.value = this.route.snapshot.paramMap.get("data");
    // console.log(this.value)

    // this.value = this.route.snapshot.paramMap.get("data");
    // console.log(this.value)



  }
  removeitem(item : any){
    this.cartService.removeCartItems(item);
  }

  emptycard(){
    this.cartService.removeAll();
  }

}
