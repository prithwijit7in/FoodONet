import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  isOn:boolean= true;
  addAddress:boolean=false;
  constructor() { }
 
  redirectTo(){
    $('.disable_screen').hide();
    $('.cart').hide();
  }
  ngOnInit(): void {
     $(".del_pro").click(function(){
    $(this).closest('.Product_in_cart').hide();
    });
  }

}
