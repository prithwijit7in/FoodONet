import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../../shared/auth.service';
import { DataService } from './../../../shared/data.service';
import { async, Observable } from 'rxjs';

@Component({
  selector: 'app-vendor-signup-step2',
  templateUrl: './vendor-signup-step2.component.html',
  styleUrls: ['./vendor-signup-step2.component.css']
})
export class VendorSignupStep2Component implements OnInit {

  vendorSignup2!: FormGroup;
  submitted = false;
  data: any = [];
  
  formData:any;
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router:Router,public authService: AuthService,private dataService: DataService) { }

  ngOnInit(): void {
    this.vendorSignup2 = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      
  });
 
  this.formData = this.dataService.getFormData()

  //console.log(this.formData = this.dataService.getFormData());
  }

  get f() { return this.vendorSignup2.controls; }

  SubmitvenderSignup2() {
   
    this.submitted = true;

    // stop here if form is invalid
    if (this.vendorSignup2.invalid) {
        return;
    }
  
   this.dataService.setFormData(this.vendorSignup2.value);
   let rslt = this.dataService.getFormData();

   //this.signUpUser.push(this.vendorSignup2.value);
   console.log(rslt);
   //this.router.navigate(['/vendor_signup_step2']);
alert('SUCCESS!! :-)\n\n' + JSON.stringify(rslt, null, 4));
 

  /* return this.authService.getPin(this.vendorSignup1.value)
  .subscribe((data) => {
    this.data = data;
   // console.log(this.data);
    
    
  }); */

}
}
