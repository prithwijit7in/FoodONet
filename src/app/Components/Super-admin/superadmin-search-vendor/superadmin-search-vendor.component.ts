import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadmin-search-vendor',
  templateUrl: './superadmin-search-vendor.component.html',
  styleUrls: ['./superadmin-search-vendor.component.css']
})
export class SuperadminSearchVendorComponent implements OnInit {

  constructor(private router:Router)  { }
  redirectToVendor(){
    this.router.navigate(['/superadmin_vendor_details']);
  }

  ngOnInit(): void {
  }

}
