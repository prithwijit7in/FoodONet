import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginSecurityCodeComponent } from './Components/login-security-code/login-security-code.component';
import { ResetPasswordOtpComponent } from './Components/reset-password-otp/reset-password-otp.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { PendingAuthorizationComponent } from './Components/Super-admin/pending-authorization/pending-authorization.component';
import { SuperadminAddUserComponent } from './Components/Super-admin/superadmin-add-user/superadmin-add-user.component';
import { SuperadminConsumerComplaintsDetailsComponent } from './Components/Super-admin/superadmin-consumer-complaints-details/superadmin-consumer-complaints-details.component';
import { SuperadminConsumerDetailsComponent } from './Components/Super-admin/superadmin-consumer-details/superadmin-consumer-details.component';
import { SuperadminDashboardComponent } from './Components/Super-admin/superadmin-dashboard/superadmin-dashboard.component';
import { SuperadminEditUserComponent } from './Components/Super-admin/superadmin-edit-user/superadmin-edit-user.component';
import { SuperadminResetUserPasswordComponent } from './Components/Super-admin/superadmin-reset-user-password/superadmin-reset-user-password.component';
import { SuperadminSearchConsumerComponent } from './Components/Super-admin/superadmin-search-consumer/superadmin-search-consumer.component';
import { SuperadminSearchVendorComponent } from './Components/Super-admin/superadmin-search-vendor/superadmin-search-vendor.component';
import { SuperadminVendorDetailsComponent } from './Components/Super-admin/superadmin-vendor-details/superadmin-vendor-details.component';
import { SuperadminVendorListComponent } from './Components/Super-admin/superadmin-vendor-list/superadmin-vendor-list.component';
import { SuperadminVendorProductListComponent } from './Components/Super-admin/superadmin-vendor-product-list/superadmin-vendor-product-list.component';
import { SuperadminViewUserComponent } from './Components/Super-admin/superadmin-view-user/superadmin-view-user.component';
import { VendorAddProductComponent } from './Components/Vendors/vendor-add-product/vendor-add-product.component';
import { VendorDashboardComponent } from './Components/Vendors/vendor-dashboard/vendor-dashboard.component';
import { VendorLoginComponent } from './Components/Vendors/vendor-login/vendor-login.component';
import { VendorProductInventoryComponent } from './Components/Vendors/vendor-product-inventory/vendor-product-inventory.component';
import { VendorProductListComponent } from './Components/Vendors/vendor-product-list/vendor-product-list.component';
import { VendorRegistrationCompleteComponent } from './Components/Vendors/vendor-registration-complete/vendor-registration-complete.component';
import { VendorServiceAvailibilityComponent } from './Components/Vendors/vendor-service-availibility/vendor-service-availibility.component';
import { VendorSignupBankDetailsComponent } from './Components/Vendors/vendor-signup-bank-details/vendor-signup-bank-details.component';
import { VendorSignupCompleteComponent } from './Components/Vendors/vendor-signup-complete/vendor-signup-complete.component';
import { VendorSignupContactDetailsLIComponent } from './Components/Vendors/vendor-signup-contact-details-li/vendor-signup-contact-details-li.component';
import { VendorSignupDocumentUploadComponent } from './Components/Vendors/vendor-signup-document-upload/vendor-signup-document-upload.component';
import { VendorSignupLegalInfoComponent } from './Components/Vendors/vendor-signup-legal-info/vendor-signup-legal-info.component';
import { VendorSignupStep1Component } from './Components/Vendors/vendor-signup-step1/vendor-signup-step1.component';
import { VendorSignupStep2Component } from './Components/Vendors/vendor-signup-step2/vendor-signup-step2.component';
import { HomepageComponent } from './Frontend/homepage/homepage.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
  {path:"", redirectTo:"Homepage", pathMatch:"full"},
  { path: 'admin', component: AdminLoginComponent },
  { path: 'forgot_password', component: ForgotPasswordComponent },
  { path: 'reset_password', component: ResetPasswordComponent },
  { path: 'enter_otp_reset_password', component: ResetPasswordOtpComponent },
  { path: 'security_login', component: LoginSecurityCodeComponent },
  { path: 'vendor_signup', component: VendorServiceAvailibilityComponent },
  { path: 'vendor_signup_step1', component: VendorSignupStep1Component },
  { path: 'vendor_signup_step2', component: VendorSignupStep2Component, },
  { path: 'vendor_signup_complete', component: VendorSignupCompleteComponent },
  { path: 'vendor_login', component: VendorLoginComponent },
  { path: 'vendor_registration_contact_details', component: VendorSignupContactDetailsLIComponent },
  { path: 'vendor_registration_legal_info', component: VendorSignupLegalInfoComponent },
  { path: 'vendor_registration_bankdetails', component: VendorSignupBankDetailsComponent },
  { path: 'vendor_registration_upload_doc', component: VendorSignupDocumentUploadComponent },
  { path: 'vendor_registration_complete', component: VendorRegistrationCompleteComponent },
  { path: 'vendor_add_product', component: VendorAddProductComponent},
  { path: 'vendor_product_list', component: VendorProductListComponent},
  { path: 'vendor_product_inventory', component: VendorProductInventoryComponent},
  { path: 'vendor_dashboard', component: VendorDashboardComponent},
  { path: 'superadmin_dashboard', component: SuperadminDashboardComponent, canActivate: [AuthGuard]},
  { path: 'superadmin_add_user', component: SuperadminAddUserComponent, canActivate: [AuthGuard]},
  { path: 'superadmin_view_edit_user', component: SuperadminViewUserComponent},
  { path: 'superadmin_edit_user', component: SuperadminEditUserComponent},
  { path: 'superadmin_reset_user_password', component: SuperadminResetUserPasswordComponent},
  { path: 'superadmin_pending_authorization', component: PendingAuthorizationComponent},
  { path: 'superadmin_vendor_list', component: SuperadminVendorListComponent},
  { path: 'superadmin_search_vendor', component: SuperadminSearchVendorComponent},
  { path: 'superadmin_vendor_details', component: SuperadminVendorDetailsComponent},
  { path: 'superadmin_vendor_product_list', component: SuperadminVendorProductListComponent},
  { path: 'superadmin_search_consumer', component: SuperadminSearchConsumerComponent},
  { path: 'superadmin_consumer_details', component: SuperadminConsumerDetailsComponent},
  { path: 'superadmin_consumer_complaint_details', component: SuperadminConsumerComplaintsDetailsComponent},
  { path: 'Homepage', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
