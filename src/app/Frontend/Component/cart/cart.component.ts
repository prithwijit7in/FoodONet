import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  redirectTo(){
    $('.disable_screen').hide();
    $('.cart').hide();
  }
  ngOnInit(): void {
    
  }

}
