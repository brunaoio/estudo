import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.less']
})
export class CartPageComponent implements OnInit {
  public cart = new Cart();
  constructor() { }

  ngOnInit() {
    this.loadCart();
  }

  public loadCart() {
    this.cart = CartUtil.get();
  }



  public remove(item) {
    const index = this.cart.itens.indexOf(item);
    this.cart.itens.splice(index, 1);
    CartUtil.update(this.cart);
  }
  public clear() {
    CartUtil.clear();
    this.loadCart();
  }

  public total() {
    let total = 0;
    this.cart.itens.forEach((item) => {
      total += (item.price * item.quantity);
    });
    return total;
  }
}
