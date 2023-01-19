import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../../shared/auth.service';
import { async, Observable } from 'rxjs';


@Component({
  selector: 'app-vendor-service-availibility',
  templateUrl: './vendor-service-availibility.component.html',
  styleUrls: ['./vendor-service-availibility.component.css']
})
export class VendorServiceAvailibilityComponent implements OnInit {
  getPinCode!: FormGroup;
  submitted = false;
  data: any = [];


  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router:Router,public authService: AuthService) { }
  header = new HttpHeaders().set('Content-Type', 'application/json');
  ngOnInit(): void {
    this.getPinCode = this.formBuilder.group({
      pin: ['', [Validators.required]],
  });
  
  
  }
  
  public restrictNumeric(e: { metaKey: any; ctrlKey: any; which: number; }) {
    let input;
    if (e.metaKey || e.ctrlKey) {
      return true;
    }
    if (e.which === 32) {
     return false;
    }
    if (e.which === 0) {
     return true;
    }
    if (e.which < 33) {
      return true;
    }
    input = String.fromCharCode(e.which);
    return !!/[\d\s]/.test(input);
   }

  get f() { return this.getPinCode.controls; }
 
  pinSubmit() {
   
      this.submitted = true;

      // stop here if form is invalid
      if (this.getPinCode.invalid) {
          return;
      }
     //console.log(this.getPinCode.value.pin);

      // display form values on success
     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.getPinCode.value, null, 4));
     //this.authService.getPin(this.getPinCode.value.pin);
      
    /*  return this.authService.getPin(this.getPinCode.value.pin).subscribe((data: {}) => {
     this.User = data;
      
    });  */

    /* this.authService.getPin(this.getPinCode.value.pin)
    .subscribe(response => {
      this.pin = response;
      
    }); */
    $('.overlay').show();
    return this.authService.getPin(this.getPinCode.value.pin)
    .subscribe((data) => {
      this.data = data;
     // console.log(this.data.message);
      let pinStatus = this.data.success;
      if (pinStatus == true){
        $('.overlay').hide();
        $('.pincode_serviceable').show();
        $('.pincode_not_serviceable').hide();
      }
      else{
        $('.overlay').hide();
          $('.pincode_not_serviceable').show();
          $('.pincode_serviceable').hide();
      }
      
    });

  }

}
