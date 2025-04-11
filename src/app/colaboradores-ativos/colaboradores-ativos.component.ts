import { Component, OnInit } from '@angular/core';
import { ColaboradoresService, Colaborador } from '../colaboradores-servico/colaboradores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colaboradores-ativos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colaboradores-ativos.component.html',
  styleUrls: ['./colaboradores-ativos.component.css']
})
export class ColaboradoresAtivosComponent implements OnInit {
  colaboradores: Colaborador[] = [];

  constructor(private colaboradoresService: ColaboradoresService) {}

  ngOnInit(): void {
    this.colaboradoresService.getColaboradores().subscribe(data => {
      this.colaboradores = data;
    });
  }

  removerColaborador(nome: string): void {
    this.colaboradoresService.removerColaborador(nome);
  }
}
