import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MetropolitanoPage } from './metropolitano.page';

describe('MetropolitanoPage', () => {
  let component: MetropolitanoPage;
  let fixture: ComponentFixture<MetropolitanoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MetropolitanoPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetropolitanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('ion-title');
    expect(titleElement.textContent).toContain('Parque Metropolitano de Santiago');
  });

  it('should display the correct information', () => {
    const cardTitleElement: HTMLElement = fixture.nativeElement.querySelector('ion-card-title');
    const cardContentElements: NodeListOf<Element> = fixture.nativeElement.querySelectorAll('ion-card-content ion-item ion-textarea');

    expect(cardTitleElement.textContent).toContain('Información general');
    expect(cardContentElements.length).toBe(8);

    expect(cardContentElements[0].textContent).toContain('Fecha de creación:');
    expect(cardContentElements[1].textContent).toContain('Superficie:');
    expect(cardContentElements[2].textContent).toContain('Ubicación:');
    expect(cardContentElements[3].textContent).toContain('Dificultad de senderos:');
    expect(cardContentElements[4].textContent).toContain('Sectores principales:');
    expect(cardContentElements[5].textContent).toContain('Horarios:');
    expect(cardContentElements[6].textContent).toContain('Servicios:');
    expect(cardContentElements[7].textContent).toContain('Cómo llegar:');
  });

  it('should display the correct image', () => {
    const imageElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imageElement.getAttribute('src')).toContain('/assets/images/metropolitano/Mapa.jpg');
  });
});
