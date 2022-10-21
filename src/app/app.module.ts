import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ResetPasswordOtpComponent } from './Components/reset-password-otp/reset-password-otp.component';
import { LoginSecurityCodeComponent } from './Components/login-security-code/login-security-code.component';
import { VendorServiceAvailibilityComponent } from './Components/Vendors/vendor-service-availibility/vendor-service-availibility.component';
import { VendorSignupStep1Component } from './Components/Vendors/vendor-signup-step1/vendor-signup-step1.component';
import { VendorSignupStep2Component } from './Components/Vendors/vendor-signup-step2/vendor-signup-step2.component';
import { VendorSignupCompleteComponent } from './Components/Vendors/vendor-signup-complete/vendor-signup-complete.component';
import { VendorLoginComponent } from './Components/Vendors/vendor-login/vendor-login.component';
import { VendorSignupContactDetailsLIComponent } from './Components/Vendors/vendor-signup-contact-details-li/vendor-signup-contact-details-li.component';
import { VendorSignupLegalInfoComponent } from './Components/Vendors/vendor-signup-legal-info/vendor-signup-legal-info.component';
import { VendorSignupBankDetailsComponent } from './Components/Vendors/vendor-signup-bank-details/vendor-signup-bank-details.component';
import { VendorSignupDocumentUploadComponent } from './Components/Vendors/vendor-signup-document-upload/vendor-signup-document-upload.component';
import { VendorRegistrationCompleteComponent } from './Components/Vendors/vendor-registration-complete/vendor-registration-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminLoginComponent,
    FooterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ResetPasswordOtpComponent,
    LoginSecurityCodeComponent,
    VendorServiceAvailibilityComponent,
    VendorSignupStep1Component,
    VendorSignupStep2Component,
    VendorSignupCompleteComponent,
    VendorLoginComponent,
    VendorSignupContactDetailsLIComponent,
    VendorSignupLegalInfoComponent,
    VendorSignupBankDetailsComponent,
    VendorSignupDocumentUploadComponent,
    VendorRegistrationCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
