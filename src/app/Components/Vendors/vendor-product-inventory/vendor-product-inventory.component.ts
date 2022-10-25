import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-product-inventory',
  templateUrl: './vendor-product-inventory.component.html',
  styleUrls: ['./vendor-product-inventory.component.css']
})
export class VendorProductInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.sub-menu ul').show();
    $(".sub-menu a").click(function () {
      $(this).parent(".sub-menu").children("ul").slideToggle("100");
      $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
      $(this).addClass("active_menu");
    });
  }

}
