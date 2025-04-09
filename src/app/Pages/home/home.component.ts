import { Component } from '@angular/core';
import { News, NoticiaService } from '../../noticia-servico/noticia.service';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  newsList: News[] = [];

	constructor(private newsService: NoticiaService) { }

	ngOnInit(): void {
		this.newsService.getNews().subscribe(news => {
			this.newsList = news;
		});
	}
}
