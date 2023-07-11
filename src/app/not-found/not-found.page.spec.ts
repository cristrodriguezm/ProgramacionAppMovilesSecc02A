import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NotFoundPage } from './not-found.page';

describe('NotFoundPage', () => {
  let component: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('ion-title');
    expect(titleElement.textContent).toContain('ERROR 404!!');
  });

  it('should display the correct content', () => {
    const h1Element: HTMLElement = fixture.nativeElement.querySelector('h1');
    const pElement: HTMLElement = fixture.nativeElement.querySelector('p');
    const buttonElement: HTMLElement = fixture.nativeElement.querySelector('ion-button');

    expect(h1Element.textContent).toContain('Lo sentimos');
    expect(pElement.textContent).toContain('La página que estás buscando no existe.');
    expect(buttonElement.textContent).toContain('Volver al Home');
  });
});
