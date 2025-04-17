import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';
import  { AutenticacaoService } from '../services/autenticacao.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { News, NoticiaService } from '../noticia-servico/noticia.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit {
  userName: string | null = null;
  noticias: News[] = [];
  menuAberto = false;
  constructor(private authService: AutenticacaoService,  private router: Router, private newsService: NoticiaService) {}
  ngOnInit(): void {
    this.authService.loggedInUser$.subscribe((user) => {
      this.userName = user?.name || null;  
    });
    this.newsService.getNews().subscribe(news => {
      console.log('Notícias recebidas:', news); 
			this.noticias = news;
		});
  }
  toggleMenu() {
	this.menuAberto = !this.menuAberto;
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
    this.userName = '';
  }
  redirectToBlog(){
    this.router.navigate(['/noticia']);
  }

	navegarParaHome() {
		this.router.navigate(['/home']).then(() => window.scrollTo(0, 0));
	}

	navegarParaSobre() {
		this.router.navigate(['/sobre']).then(() => window.scrollTo(0, 0));
	}

	navegarParaServicos() {
		this.router.navigate(['/servicos']).then(() => window.scrollTo(0, 0));
	}

	navegarParaColaboradores() {
		this.router.navigate(['/colaboradores']).then(() => window.scrollTo(0, 0));
	}

	navegarParaParcerias() {
		this.router.navigate(['/parcerias']).then(() => window.scrollTo(0, 0));
	}

	navegarParaNoticias() {
		this.router.navigate(['/noticia']).then(() => window.scrollTo(0, 0));
	}

	navegarParaEventos() {
		this.router.navigate(['/evento']).then(() => window.scrollTo(0, 0));
	}

	navegarParaContato() {
		this.router.navigate(['/contato']).then(() => window.scrollTo(0, 0));
	}
}