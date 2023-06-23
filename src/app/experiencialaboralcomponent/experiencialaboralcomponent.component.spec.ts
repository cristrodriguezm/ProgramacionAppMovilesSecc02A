import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExperiencialaboralcomponentComponent } from './experiencialaboralcomponent.component';

describe('ExperiencialaboralcomponentComponent', () => {
  let component: ExperiencialaboralcomponentComponent;
  let fixture: ComponentFixture<ExperiencialaboralcomponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencialaboralcomponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperiencialaboralcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
