import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: 'login', icon: 'power' },
    { title: 'Home', url: 'home', icon: 'heart' },
    { title: 'Parques', url: '/parques', icon: 'leaf' },
    { title: 'Sobre nosotros', url: '/about-us', icon: 'business' },
  ];
  public labels = [];
  constructor() {}
}
