import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoioFinanceiroComponent } from './apoio-financeiro.component';

describe('ApoioFinanceiroComponent', () => {
  let component: ApoioFinanceiroComponent;
  let fixture: ComponentFixture<ApoioFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApoioFinanceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoioFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
