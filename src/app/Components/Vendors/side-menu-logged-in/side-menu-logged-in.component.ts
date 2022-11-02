import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-logged-in',
  templateUrl: './side-menu-logged-in.component.html',
  styleUrls: ['./side-menu-logged-in.component.css']
})
export class SideMenuLoggedInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.sub-menu ul').show();
    $(".sub-menu a").click(function () {
      $(this).parent(".sub-menu").children("ul").slideToggle("100");
      $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
      
    });
  }

}
