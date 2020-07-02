import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
    this.callPromise();
  }

  share() {
    window.alert('the product has been shared!');
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }



  callPromise() {

    function justPromise() {
      return new Promise((resolve, reject) => {
        let left = true;
        setTimeout(() => {
          if(left)  {
            resolve(1111);
          }  
        }, 1000);
      })
    }

    async function callP() {
      let id = await justPromise();
      console.log(id);
    }
    callP();
  }
}
