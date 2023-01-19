import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as $ from 'jquery';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/authconfig.interceptor';

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
import { VendorAddProductComponent } from './Components/Vendors/vendor-add-product/vendor-add-product.component';
import { VendorProductListComponent } from './Components/Vendors/vendor-product-list/vendor-product-list.component';
import { VendorProductInventoryComponent } from './Components/Vendors/vendor-product-inventory/vendor-product-inventory.component';
import { SideMenuLoggedInComponent } from './Components/Vendors/side-menu-logged-in/side-menu-logged-in.component';
import { VendorDashboardComponent } from './Components/Vendors/vendor-dashboard/vendor-dashboard.component';
import { SuperadminDashboardComponent } from './Components/Super-admin/superadmin-dashboard/superadmin-dashboard.component';
import { SuperadminLeftNavigationComponent } from './Components/Super-admin/superadmin-left-navigation/superadmin-left-navigation.component';
import { SuperadminAddUserComponent } from './Components/Super-admin/superadmin-add-user/superadmin-add-user.component';
import { SuperadminViewUserComponent } from './Components/Super-admin/superadmin-view-user/superadmin-view-user.component';
import { SuperadminEditUserComponent } from './Components/Super-admin/superadmin-edit-user/superadmin-edit-user.component';
import { SuperadminResetUserPasswordComponent } from './Components/Super-admin/superadmin-reset-user-password/superadmin-reset-user-password.component';
import { PendingAuthorizationComponent } from './Components/Super-admin/pending-authorization/pending-authorization.component';
import { SuperadminVendorListComponent } from './Components/Super-admin/superadmin-vendor-list/superadmin-vendor-list.component';
import { SuperadminSearchVendorComponent } from './Components/Super-admin/superadmin-search-vendor/superadmin-search-vendor.component';
import { SuperadminVendorDetailsComponent } from './Components/Super-admin/superadmin-vendor-details/superadmin-vendor-details.component';
import { SuperadminVendorProductListComponent } from './Components/Super-admin/superadmin-vendor-product-list/superadmin-vendor-product-list.component';
import { SuperadminSearchConsumerComponent } from './Components/Super-admin/superadmin-search-consumer/superadmin-search-consumer.component';
import { SuperadminConsumerDetailsComponent } from './Components/Super-admin/superadmin-consumer-details/superadmin-consumer-details.component';
import { SuperadminConsumerComplaintsDetailsComponent } from './Components/Super-admin/superadmin-consumer-complaints-details/superadmin-consumer-complaints-details.component';


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
    VendorRegistrationCompleteComponent,
    VendorAddProductComponent,
    VendorProductListComponent,
    VendorProductInventoryComponent,
    SideMenuLoggedInComponent,
    VendorDashboardComponent,
    SuperadminDashboardComponent,
    SuperadminLeftNavigationComponent,
    SuperadminAddUserComponent,
    SuperadminViewUserComponent,
    SuperadminEditUserComponent,
    SuperadminResetUserPasswordComponent,
    PendingAuthorizationComponent,
    SuperadminVendorListComponent,
    SuperadminSearchVendorComponent,
    SuperadminVendorDetailsComponent,
    SuperadminVendorProductListComponent,
    SuperadminSearchConsumerComponent,
    SuperadminConsumerDetailsComponent,
    SuperadminConsumerComplaintsDetailsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
     
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
