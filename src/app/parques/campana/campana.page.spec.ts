import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CampanaPage } from './campana.page';

describe('CampanaPage', () => {
  let component: CampanaPage;
  let fixture: ComponentFixture<CampanaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CampanaPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('ion-title');
    expect(titleElement.textContent).toContain('Parque nacional La Campana');
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
    expect(cardContentElements[5].textContent).toContain('Horario de escalada:');
    expect(cardContentElements[6].textContent).toContain('Objetos de conservación:');
    expect(cardContentElements[7].textContent).toContain('Cómo llegar:');
  });

  it('should display the correct images', () => {
    const imageElements: NodeListOf<Element> = fixture.nativeElement.querySelectorAll('img');
    expect(imageElements.length).toBe(4);

    expect(imageElements[0].getAttribute('src')).toContain('/assets/images/campana/Mapa.jpg');
    expect(imageElements[1].getAttribute('src')).toContain('/assets/images/campana/Mapa1.png');
    expect(imageElements[2].getAttribute('src')).toContain('/assets/images/campana/Mapa2.png');
    expect(imageElements[3].getAttribute('src')).toContain('/assets/images/campana/Mapa3.png');
  });
});
