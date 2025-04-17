import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { User, UsersService } from '../services/users.service';
@Component({
  selector: 'app-perfil',
  imports: [FormsModule, CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  user!: User;
  admin = false;
  fotoUrl: string = '';
  constructor(
    private authService: AutenticacaoService,
    private usersService: UsersService
  ) {}
  ngOnInit(): void {
    const user = this.authService.loggedInUser;
    
    if (user) {
      this.user = { ...user };
      this.fotoUrl = user.fotoUrl || '';
    } 
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.fotoUrl = reader.result as string;
      this.user.fotoUrl = this.fotoUrl;
    };
    reader.readAsDataURL(file);
  }

  salvar(): void {
    console.log(this.user);
    this.authService.atualizaUsuario(this.user);
 
      alert('Perfil atualizado com sucesso!');
    }
  }

