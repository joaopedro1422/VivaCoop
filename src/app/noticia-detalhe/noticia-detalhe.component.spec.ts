import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaDetalheComponent } from './noticia-detalhe.component';

describe('NoticiaDetalheComponent', () => {
  let component: NoticiaDetalheComponent;
  let fixture: ComponentFixture<NoticiaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiaDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
