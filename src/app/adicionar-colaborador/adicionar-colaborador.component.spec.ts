import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarColaboradorComponent } from './adicionar-colaborador.component';

describe('AdicionarColaboradorComponent', () => {
  let component: AdicionarColaboradorComponent;
  let fixture: ComponentFixture<AdicionarColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarColaboradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
