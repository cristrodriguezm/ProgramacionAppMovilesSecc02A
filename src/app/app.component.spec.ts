import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DBTaskService } from './services/db-task.service';
import { NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let dbTaskService: DBTaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [DBTaskService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    dbTaskService = TestBed.inject(DBTaskService);

    spyOn(router.events, 'pipe').and.returnValue(of(new NavigationEnd(0, '/home', '/home')));
    spyOn(dbTaskService, 'hasActiveSession').and.returnValue(Promise.resolve(true));

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should check login status on route change', () => {
    expect(dbTaskService.hasActiveSession).toHaveBeenCalled();
    expect(component.isLoggedIn).toBe(true);
    expect(component.appPages).toEqual([
      { title: 'Home', url: 'home', icon: 'heart' },
      { title: 'Parques', url: '/parques', icon: 'leaf' },
      { title: 'Sobre nosotros', url: '/about-us', icon: 'business' },
      { title: 'Mapa', url: '/mapa', icon: 'map' }
    ]);
  });

  it('should logout and navigate to login page', () => {
    spyOn(dbTaskService, 'logout');
    spyOn(router, 'navigate');

    component.logout();

    expect(dbTaskService.logout).toHaveBeenCalled();
    expect(component.isLoggedIn).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
