import { Component } from '@angular/core';
import { News, NoticiaService } from '../noticia-servico/noticia.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
	selector: 'app-noticia-detalhe',
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: './noticia-detalhe.component.html',
	styleUrl: './noticia-detalhe.component.css'
})
export class NoticiaDetalheComponent {
	news: News | undefined;
	newComment: string = '';
	comments: string[] = [];

	constructor(
		private route: ActivatedRoute,
		private newsService: NoticiaService
	) { }

	ngOnInit(): void {
		const id = Number(this.route.snapshot.paramMap.get('id'));
		this.newsService.getNewsById(id).subscribe(news => {
			this.news = news;
		});
	}

	share(platform: string): void {
		const url = window.location.href;
		let shareUrl = '';
		switch (platform) {
			case 'facebook':
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
				break;
			case 'twitter':
				shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${this.news?.title}`;
				break;
			case 'linkedin':
				shareUrl = `https://www.linkedin.com/shareArticle?url=${url}&title=${this.news?.title}`;
				break;
		}
		window.open(shareUrl, '_blank');
	}

	addComment(): void {
		if (this.newComment.trim()) {
			this.comments.push(this.newComment);
			this.newComment = '';
		}
	}
}
