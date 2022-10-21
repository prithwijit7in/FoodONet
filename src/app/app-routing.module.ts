import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginSecurityCodeComponent } from './Components/login-security-code/login-security-code.component';
import { ResetPasswordOtpComponent } from './Components/reset-password-otp/reset-password-otp.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { VendorLoginComponent } from './Components/Vendors/vendor-login/vendor-login.component';
import { VendorRegistrationCompleteComponent } from './Components/Vendors/vendor-registration-complete/vendor-registration-complete.component';
import { VendorServiceAvailibilityComponent } from './Components/Vendors/vendor-service-availibility/vendor-service-availibility.component';
import { VendorSignupBankDetailsComponent } from './Components/Vendors/vendor-signup-bank-details/vendor-signup-bank-details.component';
import { VendorSignupCompleteComponent } from './Components/Vendors/vendor-signup-complete/vendor-signup-complete.component';
import { VendorSignupContactDetailsLIComponent } from './Components/Vendors/vendor-signup-contact-details-li/vendor-signup-contact-details-li.component';
import { VendorSignupDocumentUploadComponent } from './Components/Vendors/vendor-signup-document-upload/vendor-signup-document-upload.component';
import { VendorSignupLegalInfoComponent } from './Components/Vendors/vendor-signup-legal-info/vendor-signup-legal-info.component';
import { VendorSignupStep1Component } from './Components/Vendors/vendor-signup-step1/vendor-signup-step1.component';
import { VendorSignupStep2Component } from './Components/Vendors/vendor-signup-step2/vendor-signup-step2.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  { path: 'forgot_password', component: ForgotPasswordComponent },
  { path: 'reset_password', component: ResetPasswordComponent },
  { path: 'enter_otp_reset_password', component: ResetPasswordOtpComponent },
  { path: 'security_login', component: LoginSecurityCodeComponent },
  { path: 'vendor_signup', component: VendorServiceAvailibilityComponent },
  { path: 'vendor_signup_step1', component: VendorSignupStep1Component },
  { path: 'vendor_signup_step2', component: VendorSignupStep2Component },
  { path: 'vendor_signup_complete', component: VendorSignupCompleteComponent },
  { path: 'vendor_login', component: VendorLoginComponent },
  { path: 'vendor_registration_contact_details', component: VendorSignupContactDetailsLIComponent },
  { path: 'vendor_registration_legal_info', component: VendorSignupLegalInfoComponent },
  { path: 'vendor_registration_bankdetails', component: VendorSignupBankDetailsComponent },
  { path: 'vendor_registration_upload_doc', component: VendorSignupDocumentUploadComponent },
  { path: 'vendor_registration_complete', component: VendorRegistrationCompleteComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
