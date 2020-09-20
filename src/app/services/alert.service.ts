import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastController: ToastController, private alertController: AlertController,public loadingController:LoadingController) {
    
    }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }

  async presentLoading() {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    }).then((loader)=>{
      loader.present();
    });
  }

  async presentLoadingWithMessage(message) {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: message
    }).then((loader)=>{
      loader.present();
    });
  }

  async dismissLoading() {
    return await this.loadingController.dismiss();
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header:'Success',
      message: 'Activity submitted.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Something wrong.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
