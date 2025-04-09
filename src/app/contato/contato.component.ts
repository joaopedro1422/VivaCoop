import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-contato',
	templateUrl: './contato.component.html',
	styleUrls: ['./contato.component.css'],
	imports: [CommonModule, ReactiveFormsModule]
})
export class ContatoComponent {
	contatoForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.contatoForm = this.fb.group({
			nome: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			telefone: [''],
			assunto: ['', Validators.required],
			mensagem: ['', Validators.required]
		});
	}

	enviarMensagem() {
		if (this.contatoForm.valid) {
			const dados = this.contatoForm.value;
			console.log('Mensagem enviada:', dados);

			alert('Mensagem enviada com sucesso!');
			this.contatoForm.reset();
		}
	}
}
