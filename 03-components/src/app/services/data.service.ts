import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';
import { ComponentsRoutes } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(
        private http: HttpClient
    ) {}

    getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
            tap(console.log)
        );
    }

    getMenuOpts() {
        return this.http.get<ComponentsRoutes[]>('assets/data/menu.json').pipe(
            tap(console.log)
        );
    }

    getDataSearch() {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/albums').pipe(
            tap(console.log)
        );
    }

    getDataSuperHero() {
        return this.http.get<any>('assets/data/superheroes.json').pipe(
            tap(console.log),
            delay(2500)
        );
    }
}
