import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { ParquesPage } from './parques.page';

describe('ParquesPage', () => {
  let component: ParquesPage;
  let fixture: ComponentFixture<ParquesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ParquesPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('ion-title');
    expect(titleElement.textContent).toContain('Parques en Chile');
  });

  it('should display the correct images', () => {
    const imageElements: NodeListOf<HTMLImageElement> = fixture.nativeElement.querySelectorAll('img');
    expect(imageElements.length).toBe(2);

    expect(imageElements[0].getAttribute('src')).toContain('/assets/images/campana/Portada.jpg');
    expect(imageElements[1].getAttribute('src')).toContain('/assets/images/metropolitano/Portada.jpg');
  });

  it('should navigate to the correct detail page when a card is clicked', () => {
    const routerSpy = spyOn(component['router'], 'navigate');

    const cardElements: HTMLElement[] = Array.from(fixture.nativeElement.querySelectorAll('ion-card'));
    cardElements[0].click();
    expect(routerSpy).toHaveBeenCalledWith(['/parques/campana']);

    cardElements[1].click();
    expect(routerSpy).toHaveBeenCalledWith(['/parques/metropolitano']);
  });
});
