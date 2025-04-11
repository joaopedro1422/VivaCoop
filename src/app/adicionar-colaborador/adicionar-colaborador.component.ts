import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColaboradoresService, Colaborador } from '../colaboradores-servico/colaboradores.service';

@Component({
  selector: 'app-adicionar-colaborador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adicionar-colaborador.component.html',
  styleUrls: ['./adicionar-colaborador.component.css']
})

export class AdicionarColaboradorComponent {
  novoColaborador: Colaborador = {
    nome: '',
    area: '',
    descricao: '',
    fotoUrl: '',
    linkedin: ''
  };

  constructor(
    private colaboradoresService: ColaboradoresService,
    private router: Router
  ) {}

  adicionarColaborador() {
    this.colaboradoresService.adicionarColaborador({ ...this.novoColaborador });
    alert('Colaborador adicionado com sucesso!');
    this.router.navigate(['/area-colaborador']);
  }
}
