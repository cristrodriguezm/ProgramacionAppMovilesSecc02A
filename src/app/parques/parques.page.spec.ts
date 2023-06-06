import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParquesPage } from './parques.page';

describe('ParquesPage', () => {
  let component: ParquesPage;
  let fixture: ComponentFixture<ParquesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
