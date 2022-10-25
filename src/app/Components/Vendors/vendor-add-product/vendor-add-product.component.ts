import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-add-product',
  templateUrl: './vendor-add-product.component.html',
  styleUrls: ['./vendor-add-product.component.css']
})
export class VendorAddProductComponent implements OnInit {

  constructor() {
    
   }
   
  ngOnInit(): void {
    $('.sub-menu ul').show();
    $(".sub-menu a").click(function () {
      $(this).parent(".sub-menu").children("ul").slideToggle("100");
      $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
      $(this).addClass("active_menu");
    });
  }

}
