import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NavController } from '@ionic/angular';
import { SecurityUtil } from 'src/app/utils/security.util';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  public user: User = null;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.user = SecurityUtil.get();
  }

  logout() {
    SecurityUtil.clear();
    this.navCtrl.navigateRoot('/login');
  }
}
