import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superadmin-left-navigation',
  templateUrl: './superadmin-left-navigation.component.html',
  styleUrls: ['./superadmin-left-navigation.component.css']
})
export class SuperadminLeftNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.sub-menu ul').show();
    $(".sub-menu a").click(function () {
      $(this).parent(".sub-menu").children("ul").slideToggle("100");
      $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
      
    });
  }

}
