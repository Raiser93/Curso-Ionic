import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

    components: ComponentsRoutes[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-google-playstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}


export interface ComponentsRoutes {
  icon: string;
  name: string;
  redirectTo: string;
}
