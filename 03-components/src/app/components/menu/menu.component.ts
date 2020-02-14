import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ComponentsRoutes } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    componentes: Observable<ComponentsRoutes[]>;

    constructor(
        public dataService: DataService
    ) {}

    ngOnInit() {
        this.componentes = this.dataService.getMenuOpts();
    }

}
