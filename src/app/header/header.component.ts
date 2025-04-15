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
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
    this.userName = '';
  }
  redirectToBlog(){
    this.router.navigate(['/noticia']);
  }
}
