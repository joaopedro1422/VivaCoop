import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaColaboradorComponent } from './area-colaborador.component';

describe('AreaColaboradorComponent', () => {
  let component: AreaColaboradorComponent;
  let fixture: ComponentFixture<AreaColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaColaboradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
