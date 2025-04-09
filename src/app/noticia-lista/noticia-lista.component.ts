import { Component } from '@angular/core';
import { News, NoticiaService } from '../noticia-servico/noticia.service';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 

@Component({
	selector: 'app-noticia-lista',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './noticia-lista.component.html',
	styleUrl: './noticia-lista.component.css'
})
export class NoticiaListaComponent {
	newsList: News[] = [];

	constructor(private newsService: NoticiaService) { }

	ngOnInit(): void {
		this.newsService.getNews().subscribe(news => {
			this.newsList = news;
		});
	}
}
