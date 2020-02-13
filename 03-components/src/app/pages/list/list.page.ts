import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    users: any;

    constructor(
        private dataService: DataService
    ) {}

    ngOnInit() {
        this.users = this.dataService.getUsers();
    }

}
