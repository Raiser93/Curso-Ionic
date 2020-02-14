import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ComponentsRoutes } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    components: Observable<ComponentsRoutes[]>;

    constructor(
        private menuCtrl: MenuController,
        public dataServices: DataService
    ) {}

    ngOnInit() {
        this.components = this.dataServices.getMenuOpts();
    }

    toggleMenu() {
        this.menuCtrl.toggle();
    }

}
