import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})
export class HeaderComponent {
	constructor(private router: Router) { }

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
