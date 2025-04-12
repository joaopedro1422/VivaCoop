import { Component } from '@angular/core';
import { News, NoticiaService } from '../noticia-servico/noticia.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-noticia-lista',
	standalone: true,
	imports: [CommonModule, RouterLink, FormsModule],
	templateUrl: './noticia-lista.component.html',
	styleUrl: './noticia-lista.component.css'
})
export class NoticiaListaComponent {
	newsList: News[] = [];
	showForm: boolean = false;
	isSubmitting: boolean = false;
	newNews: News = {
		id: 0,
		title: '',
		excerpt: '',
		content: '',
		image: '',
		date: ''
	};

	constructor(private newsService: NoticiaService) { }

	ngOnInit(): void {
		this.newsService.getNews().subscribe(news => {
			this.newsList = news;
		});
	}
	toggleForm(): void {
		this.showForm = !this.showForm;
		if (!this.showForm) {
			// Resetar o formulário ao fechar
			this.newNews = { id: 0, title: '', excerpt: '', content: '', image: '', date: '' };
		}
	}

	addNews(): void {
		if (this.isSubmitting) return;
		if (this.newNews.title && this.newNews.excerpt && this.newNews.content && this.newNews.image) {
			this.isSubmitting = true;
			const currentDate = new Date().toISOString().split('T')[0];
			const newsToAdd: News = {
				...this.newNews,
				date: currentDate
			} as News;
			this.newsService.addNews(newsToAdd).subscribe(news => {
				this.newsList.push(news);
				this.isSubmitting = false;
				this.toggleForm();
				location.reload();
			});
		} else {
			alert('Por favor, preencha todos os campos.');
			this.isSubmitting = false;
		}
	}
}
