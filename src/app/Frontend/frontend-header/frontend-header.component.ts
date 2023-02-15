import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-frontend-header',
  templateUrl: './frontend-header.component.html',
  styleUrls: ['./frontend-header.component.css']
})
export class FrontendHeaderComponent implements OnInit {

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
