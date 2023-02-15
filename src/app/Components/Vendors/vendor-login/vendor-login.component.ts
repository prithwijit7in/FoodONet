import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../../shared/auth.service';
import { DataService } from './../../../shared/data.service';
import { async, Observable } from 'rxjs';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {
  otp:any;
  vendorSignInOTP!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router:Router,public authService: AuthService,private dataService: DataService) { }

  ngOnInit(): void {

    this.vendorSignInOTP = this.formBuilder.group({
      role:['vendor'],
      email: ['', [Validators.email]],
      mobile: ['', [Validators.minLength(10)]],
      email_otp: [''],
      mobile_otp: [''],
    });

  }

 
  SubmitvendorSignInOTP() {
   
  }

}
