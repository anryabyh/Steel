import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(private alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ошибка 33856',
      subHeader: 'Работа станка завершена некорректно',
      message: 'Отрегулируйте мощность в зависимости от используемого материала!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
