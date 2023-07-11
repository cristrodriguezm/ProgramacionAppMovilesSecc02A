import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { AboutUsPage } from './about-us.page';

describe('AboutUsPage', () => {
  let component: AboutUsPage;
  let fixture: ComponentFixture<AboutUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUsPage);
    component = fixture.componentInstance;
  }));

  it('should create the About Us page', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page title', () => {
    const titleElement = fixture.debugElement.query(By.css('ion-title'));
    expect(titleElement.nativeElement.textContent).toContain('¿Quienes Somos?');
  });

  it('should display the team member information', () => {
    const memberNameElement = fixture.debugElement.query(By.css('h3'));
    expect(memberNameElement.nativeElement.textContent).toContain('Cristopher Rodríguez');

    const memberDescriptionElement = fixture.debugElement.query(By.css('p'));
    expect(memberDescriptionElement.nativeElement.textContent).toContain('Apasionado de los deportes al aire libre');
  });
});
