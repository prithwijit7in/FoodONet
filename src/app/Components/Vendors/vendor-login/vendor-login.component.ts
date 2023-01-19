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
  vendorLoginForm!: FormGroup;
  submitted = false;
  data: any = [];
  handleError!: HttpErrorResponse;
  error: any;
  res: any;
  Sendotp!: FormGroup;
  errors: any;
  disabled: any;
  err_msg_1:any;
  otp:any;
  
 
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router:Router,public authService: AuthService,private dataService: DataService) { }

  ngOnInit(): void {
    this.vendorLoginForm = this.formBuilder.group({
      org_name: ['', [Validators.required]],
      org_type: ['', [Validators.required]],
      trade_license_no: ['', [Validators.required]],
      license_auth: ['', [Validators.required]],
      gstin_no: ['', [Validators.required]],
      fssai_no: ['', [Validators.required]],
      role:['vendor'],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      email_otp: [''],
      mobile_otp: [''],
  });

  $('.email_verification, .mob_verification').prop('disabled', true);



/*   $(".signup_step1_nxt").click(function(){
    
    $(".signup_step2").show();
    $(".signup_step1").hide();
  }); */

  $('.signup_step1 .form-control, .signup_step1 .form-select').on('keyup blur change', function() {
    $('.signup_step1 .form-control, .signup_step1 .form-select').each(function() {
    if($(this).val() != "" && $('option[disabled]:selected').length == 0) {
        $('.signup_step1_nxt').prop('disabled', false);
    } else {
        $('.signup_step1_nxt').prop('disabled', true);
    }
  })
  });

  $('.signup_step2 .form-control').on('keyup blur', function() {
    $('.signup_step2 .form-control').each(function() {
    if($(this).val() != '' && $('#first_name').val() != '') {
        $('.signup_step2_nxt').prop('disabled', false);
    } else {
        $('.signup_step2_nxt').prop('disabled', true);
    }
  })
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
  get f() { return this.vendorLoginForm.controls; }

  redirectTo(){

    $(".signup_step2").show();
    $(".signup_step1").hide();
    $('.progressbar li:nth-child(2)').addClass('active');
    

   
  }

  verifyEmailOtp(){
    var EmailOtp:any = {};
    EmailOtp["email"] = this.vendorLoginForm.value.email;
    EmailOtp["otp"] = this.vendorLoginForm.value.email_otp;
    EmailOtp["role"] = this.vendorLoginForm.value.role;

    console.log(EmailOtp);
    $('.overlay').show();
    this.authService.verifyEmailOTP(EmailOtp).subscribe((res) => {
    
      this.res = res;
      console.log(this.res.success);
      if(this.res.success == true){
        $('.overlay').hide();
        $('.email_valid_msg').html('Email has been verified successfully.');
        $('.otp_email,.email_verification').prop('disabled', true);
        
      }
      
    },(handleError) => {
      $('.overlay').hide();
      this.handleError = handleError;
      console.log('Error List:' + this.handleError);
     
     
    
    },
    () => console.log('OTP validation completed.')
    
    );

  }

  verifyMobOtp(){
    var MobOtp:any = {};
    MobOtp["mobile"] = this.vendorLoginForm.value.mobile;
    MobOtp["otp"] = this.vendorLoginForm.value.mobile_otp;
    MobOtp["role"] = this.vendorLoginForm.value.role;

    console.log(MobOtp);
    $('.overlay').show();
    this.authService.verifyMobOTP(MobOtp).subscribe((res) => {
    
      this.res = res;
      console.log(this.res.success);
      if(this.res.success == true){
        $('.overlay').hide();
        $('.mob_valid_msg').html('Mobile has been verified successfully.');
        $('.otp_mob,.mob_verification').prop('disabled', true);
      }
    },(handleError) => {
      $('.overlay').hide();
      this.handleError = handleError;
      console.log('Error List:' + this.handleError);
     
     
    
    },
    () => console.log('OTP validation completed.')
    
    );
    

  }
 
  sendotp(){
    var OTP:any = {};
    OTP["email"] = this.vendorLoginForm.value.email;
    OTP["mobile"] = this.vendorLoginForm.value.mobile;
    OTP["role"] = this.vendorLoginForm.value.role;


    console.log(OTP);

    console.log(this.vendorLoginForm.value);
    $('.overlay').show();
    this.authService.sendOTP(OTP).subscribe((res) => {
      
      this.res = res;
      console.log(this.res.success);
      $('.overlay').hide();
        $('.otp_success_msg').show();
        $('.vendor_signup_error').hide();
       $('.otp_success_msg').html("OTP has been sent Successfully at your Mobile Number and email Id.");
       $('.mob_verification, .email_verification').prop('disabled', false);
       $('.verify_otp').removeAttr("disabled");
       $(function() {
        $(".snd-otp-btn").attr("disabled", "disabled");
        $('.countdown').show();
        setTimeout(function() {
          $('.countdown').hide();
            $(".snd-otp-btn").removeAttr("disabled");
            $(".snd-otp-btn").html("Resend OTP at Mobile & Email");      
        }, 60000);
       });
         var timer2 = "1:00";
         var interval = setInterval(function() {
          var timer = timer2.split(':');
          //by parsing integer, I avoid all extra string processing
          var minutes:any = parseInt(timer[0], 10);
          var seconds:any = parseInt(timer[1], 10);
          --seconds;
          minutes = (seconds < 0) ? --minutes : minutes;
          if (minutes < 0) clearInterval(interval);
          seconds = (seconds < 0) ? 59 : seconds;
          seconds = (seconds < 10) ? '0' + seconds : seconds;
          //minutes = (minutes < 10) ?  minutes : minutes;
          $('.countdown').html('You can Resend OTP After ' + seconds + ' Sec. OTP is valid for 1 min.');
          timer2 = minutes + ':' + seconds;
          
          }, 1000);

          
         
    },
    handleError => {
      $('.overlay').hide();
      console.log('Error List:' + handleError);
     
     
    
    },
    () => console.log('OTP request completed.')
    
    );
  }






  onSubmit() {

    var VendorSignup:any = {};
    VendorSignup["email"] = this.vendorLoginForm.value.email;
    VendorSignup["mobile"] = this.vendorLoginForm.value.mobile;
    VendorSignup["role"] = this.vendorLoginForm.value.role;
    VendorSignup["org_name"] = this.vendorLoginForm.value.org_name;
    VendorSignup["org_type"] = this.vendorLoginForm.value.org_type;
    VendorSignup["trade_license_no"] = this.vendorLoginForm.value.trade_license_no;
    VendorSignup["license_auth"] = this.vendorLoginForm.value.license_auth;
    VendorSignup["gstin_no"] = this.vendorLoginForm.value.gstin_no;
    VendorSignup["fssai_no"] = this.vendorLoginForm.value.fssai_no;
    VendorSignup["name"] = this.vendorLoginForm.value.name;

    
    console.log(VendorSignup);
   
    this.submitted = true;

    // stop here if form is invalid
    if (this.vendorLoginForm.invalid) {
        return;
    }
   //console.log(this.getPinCode.value.pin);
   this.vendorLoginForm.value;
    // display form values on success
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(VendorSignup, null, 4));
   //this.authService.getPin(this.vendorSignup1.value.pin);
   //this.dataService.setFormData(this.vendorSignup1.value);
   $('.overlay').show();
   this.authService.signUp(VendorSignup).subscribe((res) => {

      this.res = res;
      console.log(this.res.success);
      $('.overlay').hide();
    
     // alert(this.res.success);
      this.vendorLoginForm.reset();
      this.router.navigate(['vendor_signup_complete']);
    
   
  });

 

  

}



  message(message: any) {
    throw new Error('Method not implemented.');
  }

}
