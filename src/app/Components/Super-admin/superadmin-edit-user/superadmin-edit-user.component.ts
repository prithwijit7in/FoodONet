import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superadmin-edit-user',
  templateUrl: './superadmin-edit-user.component.html',
  styleUrls: ['./superadmin-edit-user.component.css']
})
export class SuperadminEditUserComponent implements OnInit {
  url="/assets/images/User-Profile.png"

  selectFile(event:any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.url= event.target.result
      }

    }


  }
  constructor() { }

  ngOnInit(): void {
  }

}
