import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superadmin-add-user',
  templateUrl: './superadmin-add-user.component.html',
  styleUrls: ['./superadmin-add-user.component.css']
})
export class SuperadminAddUserComponent implements OnInit {
  url="assets/images/User-Profile.png"

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
