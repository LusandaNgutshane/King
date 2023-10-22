import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintingPage } from './printing.page';

describe('PrintingPage', () => {
  let component: PrintingPage;
  let fixture: ComponentFixture<PrintingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrintingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
