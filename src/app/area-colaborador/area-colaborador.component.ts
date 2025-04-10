import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { ColaboradoresService, Colaborador } from '../colaboradores-servico/colaboradores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-area-do-colaborador',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './area-colaborador.component.html',
  styleUrls: ['./area-colaborador.component.css']
})
export class AreaColaboradorComponent {
  
  colaboradores: Colaborador[] = [];

  constructor(private colaboradoresService: ColaboradoresService) {}

  ngOnInit() {
    this.colaboradoresService.getColaboradores().subscribe(data => {
      this.colaboradores = data;
    });
  }

  removerColaborador(nome: string): void {
    if (confirm(`Deseja remover o colaborador ${nome}?`)) {
      this.colaboradoresService.removerColaborador(nome);
    }
  }

}
