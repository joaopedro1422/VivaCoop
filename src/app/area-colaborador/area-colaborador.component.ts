import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { ColaboradoresService, Colaborador } from '../colaboradores-servico/colaboradores.service';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-area-do-colaborador',
  standalone: true,
  imports: [RouterModule, CommonModule, NgIf],
  templateUrl: './area-colaborador.component.html',
  styleUrls: ['./area-colaborador.component.css']
})
export class AreaColaboradorComponent {
  admin = false;
  colaboradores: Colaborador[] = [];

  constructor(private colaboradoresService: ColaboradoresService, private authService: AutenticacaoService, private router : Router) {}

  ngOnInit() {
    const user = this.authService.loggedInUser;
    if(user?.admin){
      this.admin = user.admin;
    }
    this.colaboradoresService.getColaboradores().subscribe(data => {
      this.colaboradores = data;
    });
  }

  removerColaborador(nome: string): void {
    if (confirm(`Deseja remover o colaborador ${nome}?`)) {
      this.colaboradoresService.removerColaborador(nome);
    }
  }
  navegarParaPerfil() {
		this.router.navigate(['/perfil']).then(() => window.scrollTo(0, 0));
	}


}
