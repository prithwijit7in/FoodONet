import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router,public authService: AuthService) { }
  logout() {
    this.authService.doLogout()
  }

  ngOnInit(): void {
    $('#login_fnc').click(function(){
      $('.login-dropdown').toggle();
    });
  }

}
