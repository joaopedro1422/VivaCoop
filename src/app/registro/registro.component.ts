import { Component } from '@angular/core';
import { AutenticacaoService } from '../services/autenticacao.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nome= '';
  dataNascimento = new Date();
  email = '';
  usuario ='';
  senha ='';
  error = '';
  constructor(private authService: AutenticacaoService, private router: Router) {}
  cadastra() {
 
   
    
  }
}
