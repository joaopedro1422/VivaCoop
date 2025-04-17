import { Component } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  constructor(private authService: AutenticacaoService, private router: Router,  private cd: ChangeDetectorRef) {}
  login() {
    console.log('chegou aqui 1')
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/area-colaborador']);
    } else {
     
      setTimeout(() => {
        this.error = 'Usuário ou senha inválidos';
      });
    }
  }

  navegarParaColaboradores() {
	this.router.navigate(['/colaboradores']).then(() => window.scrollTo(0, 0));
}
}
