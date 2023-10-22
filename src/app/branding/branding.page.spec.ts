import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandingPage } from './branding.page';

describe('BrandingPage', () => {
  let component: BrandingPage;
  let fixture: ComponentFixture<BrandingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BrandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
