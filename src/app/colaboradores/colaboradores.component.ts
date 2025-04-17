
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ColaboradoresService, Colaborador } from '../colaboradores-servico/colaboradores.service';
import { CommonModule } from '@angular/common';
import  { AutenticacaoService } from '../services/autenticacao.service';
import { Router } from '@angular/router';
import { User, UsersService } from '../services/users.service';
@Component({
  selector: 'app-colaboradores',
  imports: [CommonModule],
  templateUrl: './colaboradores.component.html',
  styleUrl: './colaboradores.component.css'
})
export class ColaboradoresComponent {
  colaboradores: User[] = [];
  userName: string | null = null;
  @ViewChild('formulario') formulario!: ElementRef;

  rolarParaFormulario(): void {
    this.formulario.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  

  constructor(private colaboradoresService: ColaboradoresService, private authService: AutenticacaoService, private router: Router, private userService : UsersService) {}

  ngOnInit() {
    this.colaboradores = this.userService.getUsers();
    console.log("exemplo:::");
    console.log(this.colaboradores);
    this.authService.loggedInUser$.subscribe((user) => {
      this.userName = user?.name || null;
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
