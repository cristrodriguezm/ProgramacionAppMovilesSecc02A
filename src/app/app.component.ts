import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DBTaskService } from './services/db-task.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: 'login', icon: 'power' }
  ];
  public labels = [];
  public isLoggedIn = false;

  constructor(private router: Router, private dbTaskService: DBTaskService) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkLoginStatus();
      });
  }

  async checkLoginStatus() {
    this.isLoggedIn = await this.dbTaskService.hasActiveSession();
    if (this.isLoggedIn) {
      this.appPages = [
        { title: 'Home', url: 'home', icon: 'heart' },
        { title: 'Parques', url: '/parques', icon: 'leaf' },
        { title: 'Sobre nosotros', url: '/about-us', icon: 'business' }
      ];
    } else {
      this.appPages = [
        { title: 'Login', url: 'login', icon: 'power' }
      ];
    }
  }

  logout() {
    this.dbTaskService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
