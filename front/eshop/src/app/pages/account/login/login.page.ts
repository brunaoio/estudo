import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import { User } from 'src/app/models/user.model';
import { SecurityUtil } from 'src/app/utils/security.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form: FormGroup;
  public hide = true;
  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private service: DataService
  ) {

    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });

  }

  async submit() {
    if (this.form.invalid) {
      return;
    }
    const loading = await this.loadingCtrl.create({ message: 'Autenticando...' });
    loading.present();

    this.service.authenticate(this.form.value)
      .subscribe(
        (res: User) => {
          SecurityUtil.set(res);
          this.navCtrl.navigateRoot('/');
          loading.dismiss();
        },
        (err) => {
          this.showError('Usuário os senha inválidos');
          console.error(err);
          loading.dismiss();
        }
      );
  }

  async resetPassword() {
    if (this.form.controls.username.invalid) {
      this.showError('Usuário Inválido');
      return;
    }

    const loading = await this.loadingCtrl.create({ message: 'restaurando sua senha...' });
    loading.present();
  }

  ngOnInit() {
  }
  toggleHide() {
    this.hide = !this.hide;
  }

  async showError(mensagem: string) {
    const error = await this.toastCtrl.create({
      message: mensagem, duration: 3000,
      buttons: [{
        icon: 'close',
        role: 'cancel'
      }
      ],
      color: 'dark'
    });
    error.present();
  }

}
