import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    components: ComponentsRoutes[] = [{
            icon: 'american-football',
            name: 'Action Sheet',
            redirectTo: '/action-sheet'
        },
        {
            icon: 'logo-google-playstore',
            name: 'Alert',
            redirectTo: '/alert'
        },
        {
            icon: 'beaker',
            name: 'Avatar',
            redirectTo: '/avatar'
        },
        {
            icon: 'radio-button-on',
            name: 'Botones y route',
            redirectTo: '/botones'
        },
        {
            icon: 'card',
            name: 'Cards',
            redirectTo: '/card'
        },
        {
            icon: 'checkmark-circle-outline',
            name: 'CheckBox',
            redirectTo: '/check'
        },
        {
            icon: 'calendar',
            name: 'Date Time',
            redirectTo: '/date-time'
        },
        {
            icon: 'car',
            name: 'Fab',
            redirectTo: '/fab'
        },
        {
            icon: 'grid',
            name: 'Grid - Rows',
            redirectTo: '/grid'
        },
        {
            icon: 'infinite',
            name: 'Infinite Scroll',
            redirectTo: '/infinite-scroll'
        },
        {
            icon: 'hammer',
            name: 'Input Forms',
            redirectTo: '/input'
        },
        {
            icon: 'list',
            name: 'List',
            redirectTo: '/list'
        },
    ];

    constructor() {}

    ngOnInit() {}

}


export interface ComponentsRoutes {
  icon: string;
  name: string;
  redirectTo: string;
}
