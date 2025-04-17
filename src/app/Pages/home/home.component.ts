import { Component } from '@angular/core';
import { News, NoticiaService } from '../../noticia-servico/noticia.service';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
	@ViewChild('carouselContainer', { static: false }) carousel!: ElementRef;

	proximo() {
	this.carousel.nativeElement.scrollBy({ left: this.carousel.nativeElement.offsetWidth, behavior: 'smooth' });
	}

	anterior() {
	this.carousel.nativeElement.scrollBy({ left: -this.carousel.nativeElement.offsetWidth, behavior: 'smooth' });
	}
  newsList: News[] = [];

	constructor(private newsService: NoticiaService) { }

	ngOnInit(): void {
		this.newsService.getNews().subscribe(news => {
			this.newsList = news;
		});
	}
}
