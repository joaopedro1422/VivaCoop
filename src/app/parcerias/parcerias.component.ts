import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parcerias',
  imports: [],
  templateUrl: './parcerias.component.html',
  styleUrl: './parcerias.component.css'
})
export class ParceriasComponent {

  @ViewChild('formulario') formulario!: ElementRef;

  rolarParaFormulario(): void {
    this.formulario.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
