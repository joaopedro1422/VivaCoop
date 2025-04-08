import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaListaComponent } from './noticia-lista.component';

describe('NoticiaListaComponent', () => {
  let component: NoticiaListaComponent;
  let fixture: ComponentFixture<NoticiaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiaListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
