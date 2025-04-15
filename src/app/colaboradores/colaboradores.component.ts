
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ColaboradoresService, Colaborador } from '../colaboradores-servico/colaboradores.service';
import { CommonModule } from '@angular/common';
import  { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-colaboradores',
  imports: [CommonModule],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent {
  userName: string | null = null;
  @ViewChild('formulario') formulario!: ElementRef;

  rolarParaFormulario(): void {
    this.formulario.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  colaboradores: Colaborador[] = [];

  constructor(private colaboradoresService: ColaboradoresService, private authService: AutenticacaoService, private router: Router) {}

  ngOnInit() {
    this.colaboradoresService.getColaboradores().subscribe(data => {
      this.colaboradores = data;
    });
    this.authService.loggedInUser$.subscribe((user) => {
      this.userName = user?.name || null;  // Atualiza o nome do usuário no header
    });
  }

  verificaLogin(){
    if(this.userName){
      this.router.navigate(['/area-colaborador']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}
