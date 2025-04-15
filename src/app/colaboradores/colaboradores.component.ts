
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ColaboradoresService, Colaborador } from '../colaboradores-servico/colaboradores.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-colaboradores',
  imports: [CommonModule],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent {
  @ViewChild('formulario') formulario!: ElementRef;

  rolarParaFormulario(): void {
    this.formulario.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  colaboradores: Colaborador[] = [];

  constructor(private colaboradoresService: ColaboradoresService) {}

  ngOnInit() {
    this.colaboradoresService.getColaboradores().subscribe(data => {
      this.colaboradores = data;
    });
  }
}
