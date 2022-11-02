import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadmin-view-user',
  templateUrl: './superadmin-view-user.component.html',
  styleUrls: ['./superadmin-view-user.component.css']
})
export class SuperadminViewUserComponent implements OnInit {

  constructor(private router:Router)  { }
  redirectToedituser(){
    this.router.navigate(['/superadmin_edit_user'],{ skipLocationChange:true });
  }

  ngOnInit(): void {
  }

}
