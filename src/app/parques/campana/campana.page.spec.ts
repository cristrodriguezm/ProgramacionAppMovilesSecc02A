import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CampanaPage } from './campana.page';

describe('CampanaPage', () => {
  let component: CampanaPage;
  let fixture: ComponentFixture<CampanaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CampanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
