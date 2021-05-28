import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Security } from 'src/app/utils/security.util';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public user: User;
  public cartQtd: number;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = Security.getUser();
    this.cartQtd = CartUtil.loadQuantity();
  }

  logout() {
    Security.clear();
    this.router.navigate(['/login']);
  }

}
