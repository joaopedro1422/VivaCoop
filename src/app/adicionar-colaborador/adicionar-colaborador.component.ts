import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColaboradoresService, Colaborador } from '../colaboradores-servico/colaboradores.service';
import { User } from '../services/users.service';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-adicionar-colaborador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adicionar-colaborador.component.html',
  styleUrls: ['./adicionar-colaborador.component.css']
})

export class AdicionarColaboradorComponent {
  id = 0;
  name = '';
  area = '';
  descricao = '';
  fotoUrl = '';
  linkedin = '';
  username = '';
  password = '';
  email = '';
  dataNascimento = new Date();

  error = '';
 
  constructor(
    private authService: AutenticacaoService,
    private colaboradoresService: ColaboradoresService,
    private router: Router
  ) {}

  adicionarColaborador() {
    if(!this.authService.cadastra(this.username,this.password, this.email, this.dataNascimento, this.name, this.fotoUrl, this.linkedin, this.area, this.descricao)){
      setTimeout(() => {
        this.error = 'Usuário já utilizado';
      });
    }
    alert('Colaborador adicionado com sucesso!');
    this.router.navigate(['/area-colaborador']);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.fotoUrl = reader.result as string;
      this.fotoUrl = this.fotoUrl;
    };
    reader.readAsDataURL(file);
  }
}
