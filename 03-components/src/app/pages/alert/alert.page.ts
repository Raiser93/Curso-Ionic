import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

    titulo: string;

    constructor(
        public alertCtrl: AlertController
    ) {}

    ngOnInit() {}

    async presentAlert() {
        const alert = await this.alertCtrl.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'primary',
                    handler: (blah) => {
                        console.log('Confirm Ok: Ok');
                    }
                },
            ]
        });

        await alert.present();
    }

    async presentAlertInput() {
        const alert = await this.alertCtrl.create({
            header: 'Input',
            subHeader: 'Ingrese nombre',
            inputs: [
                {
                    name: 'name',
                    type: 'text',
                    placeholder: 'Ingrese su nombre'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (e) => {
                        console.log(e);
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'primary',
                    handler: (e) => {
                        if (e.name && e.name.trim().length > 0) {
                            this.titulo = e.name;
                        }
                    }
                }
            ]
        });
        await alert.present();
    }

}
