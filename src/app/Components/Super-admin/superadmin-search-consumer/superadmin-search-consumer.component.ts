import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadmin-search-consumer',
  templateUrl: './superadmin-search-consumer.component.html',
  styleUrls: ['./superadmin-search-consumer.component.css']
})
export class SuperadminSearchConsumerComponent implements OnInit {

  constructor(private router:Router)  { }
  redirectToVendor(){
    this.router.navigate(['/superadmin_consumer_details']);
  }

  ngOnInit(): void {
  }

}
