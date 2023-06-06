import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetropolitanoPage } from './metropolitano.page';

describe('MetropolitanoPage', () => {
  let component: MetropolitanoPage;
  let fixture: ComponentFixture<MetropolitanoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MetropolitanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
