import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresAtivosComponent } from './colaboradores-ativos.component';

describe('ColaboradoresAtivosComponent', () => {
  let component: ColaboradoresAtivosComponent;
  let fixture: ComponentFixture<ColaboradoresAtivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaboradoresAtivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaboradoresAtivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
