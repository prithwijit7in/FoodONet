import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  isOn:boolean= true;
  addAddress:boolean=false;
 
  selectedUserTab = 1;
   tabs = [
     {
       name: 'Credit Card / Debit Card',
       key: 1,
       active: true
     },
      {
      name: 'NetBanking',
      key: 2,
      active: false
    },
    {
      name: 'UPI',
      key: 3,
      active: false
    },
    {
      name: 'Cash On Delivery',
      key: 4,
      active: false
    }
   ];

tabChange(selectedTab: { key: number; }) {
    console.log('### tab change');
    this.selectedUserTab = selectedTab.key;
    for (let tab of this.tabs) {
        if (tab.key === selectedTab.key) {
          tab.active = true;
        } else {
          tab.active = false;
        }
    }
  }

}
