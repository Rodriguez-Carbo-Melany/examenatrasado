import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  password: string = '';
  confirmPassword: string = '';
  message: string = '';

  constructor(private toastController: ToastController) { }

  onSubmit() {
    if (this.password === this.confirmPassword) {
      this.message = 'Las contraseñas coinciden.';
      this.presentToast(this.message);
    } else {
      this.message = 'Las contraseñas no coinciden. Por favor, intente de nuevo.';
      this.presentToast(this.message);
    }
  }

  // Mostrar el mensaje (toast) en pantalla
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: this.message.includes('coinciden') ? 'success' : 'danger',
    });
    toast.present();
  }
}
