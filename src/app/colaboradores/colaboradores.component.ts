
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  imports: [],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent {
  @ViewChild('formulario') formulario!: ElementRef;

  rolarParaFormulario(): void {
    this.formulario.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
