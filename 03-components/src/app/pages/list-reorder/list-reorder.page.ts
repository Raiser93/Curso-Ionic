import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-reorder',
    templateUrl: './list-reorder.page.html',
    styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

    personajes = ['Madara', 'Sasuke', 'Itachi', 'Obito', 'Shisui'];

    constructor() {}

    ngOnInit() {}

    reorder(event) {
        event.detail.complete();

        const itemMover = this.personajes.splice(event.detail.from, 1)[0];
        this.personajes.splice(event.detail.to, 0, itemMover);
    }

    onClick() {
        console.log(this.personajes)
    }

}
