import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-date-time',
    templateUrl: './date-time.page.html',
    styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

    fechaNacimiento = new Date();

    customPickerOptions;
    customDate;

    constructor() {}

    ngOnInit() {
        this.customPickerOptions = {
            buttons: [{
                text: 'Save',
                handler: (evento) => {
                    console.log('Clicked Save!')
                    console.log(evento);
                    console.log(new Date().setDate(evento.day.value));
                }
            }, {
                text: 'Log',
                handler: () => {
                    console.log('Clicked Log. Do not Dismiss.');
                    return false;
                }
            }]
        }
    }

    cambioFecha(fecha) {
        console.log(fecha);
        console.log('Date', new Date(fecha.detail.value));
    }

}
