import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Alerta {
	tipo: 'sucesso' | 'erro' | 'info';
	mensagem: string;
	visivel: boolean;
}
@Component({
	selector: 'app-contato',
	templateUrl: './contato.component.html',
	styleUrls: ['./contato.component.css'],
	imports: [CommonModule, ReactiveFormsModule]
})
export class ContatoComponent {
	contatoForm: FormGroup;
	alerta: Alerta = {
		tipo: 'info',
		mensagem: '',
		visivel: false
	};

	constructor(private fb: FormBuilder) {
		this.contatoForm = this.fb.group({
			nome: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			telefone: ['', Validators.required],
			assunto: ['', Validators.required],
			mensagem: ['', Validators.required]
		});
	}

	enviarMensagem() {
		if (this.contatoForm.valid) {
			const dados = this.contatoForm.value;
			this.mostrarAlerta('sucesso', `Solicitaçao feita com sucesso, em breve retornaremos`);
			this.contatoForm.reset();
		}
		else {
			this.contatoForm.markAllAsTouched();
		  }
	}
	mostrarAlerta(tipo: 'sucesso' | 'erro' | 'info', mensagem: string): void {
		this.alerta = {
			tipo,
			mensagem,
			visivel: true
		};

		setTimeout(() => {
			this.alerta.visivel = false;
		}, 5000);
	}

	fecharAlerta(): void {
		this.alerta.visivel = false;
	}
}
