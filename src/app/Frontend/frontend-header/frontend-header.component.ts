import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../shared/auth.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-frontend-header',
  templateUrl: './frontend-header.component.html',
  styleUrls: ['./frontend-header.component.css']
})
export class FrontendHeaderComponent implements OnInit {
 
  cartBoxopen:boolean=false;
  closeResult = '';
  constructor(private http: HttpClient,private router:Router,public authService: AuthService,private modalService: NgbModal) { }
  logout() {
    this.authService.doLogout()
  }
  openCart(){
    $('.disable_screen').show();
    $('.cart').show();
    
}



	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
  ngOnInit(): void {
    $('#login_fnc').click(function(){
      $('.login-dropdown').toggle();
    });
  }



}
