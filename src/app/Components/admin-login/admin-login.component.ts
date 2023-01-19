import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../shared/auth.service';
import { Observable } from 'rxjs';
// import custom validator to validate that password and confirm password fields match
//import { MustMatch } from 'src/app/_helpers';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {
  
    
  loginForm!: FormGroup;
  submitted = false;
  admin:any;
  error : string | undefined;
  
  constructor(private formBuilder: FormBuilder,private http: HttpClient,private router:Router,public authService: AuthService) 
  {
   
  }
  
  redirectTo(){
    this.router.navigate(['/enter_otp_reset_password'],{ skipLocationChange:true });
  }
  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          role: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      });

    

    $("#select_role").change(function(){
        var status = $(this).val();
        
      if(status=="admin"){
      $("#frgt_pass_admin").show();
      $("#frgt_pass_superadmin").hide();
    }
    else if(status=="superadmin"){
        $("#frgt_pass_superadmin").show();
        $("#frgt_pass_admin").hide();
    }
    else{
        $("#frgt_pass_admin").hide();
        $("#frgt_pass_superadmin").hide();
    }
     });

   
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
 
  onSubmit() {
     
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      $('.overlay').show();
     // console.log(this.loginForm.value.role);

      // display form values on success
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
      this.authService.signIn(this.loginForm.value)
      
      
  }

  onReset() {
      this.submitted = false;
      this.loginForm.reset();
    }
  
}
function redirectTo() {
    throw new Error('Function not implemented.');
}

