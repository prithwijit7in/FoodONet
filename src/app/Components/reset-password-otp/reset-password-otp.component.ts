import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-otp',
  templateUrl: './reset-password-otp.component.html',
  styleUrls: ['./reset-password-otp.component.css']
})
export class ResetPasswordOtpComponent implements OnInit {

  constructor(private router:Router)  { }
  redirectToresetpassword(){
    this.router.navigate(['/reset_password'],{ skipLocationChange:true });
  }

  ngOnInit(): void {
  }

}
