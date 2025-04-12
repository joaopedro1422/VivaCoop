// eventos.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Evento {
	id: number;
	imagem: string;
	titulo: string;
	data: Date;
	local: string;
	descricao: string;
	inscricaoAberta: boolean;
}
interface Alerta {
	tipo: 'sucesso' | 'erro' | 'info';
	mensagem: string;
	visivel: boolean;
}

@Component({
	selector: 'app-eventos',
	templateUrl: './evento.component.html',
	styleUrls: ['./evento.component.css'],
	imports: [
		CommonModule, // Adicione essa linha se estiver faltando
		// ... outros módulos
	]
})
export class EventoComponent implements OnInit {
	alerta: Alerta = {
		tipo: 'info',
		mensagem: '',
		visivel: false
	};
	eventos: Evento[] = [
		{
			id: 1,
			imagem: '../../assets/imagens/logo-card-evento.png',
			titulo: 'Oficina de Marketing Digital',
			data: new Date('2025-04-02'),
			local: 'Espaço Coworking',
			descricao: 'Estratégias de marketing para redes sociais.',
			inscricaoAberta: true
		},
		{
			id: 2,
			imagem: '../../assets/imagens/logo-card-evento.png',
			titulo: 'Encontro de Cooperados',
			data: new Date('2025-04-05'),
			local: 'Refeitório',
			descricao: 'Momento de integração entre os membros da cooperativa.',
			inscricaoAberta: true
		},
		{
			id: 3,
			imagem: '../../assets/imagens/logo-card-evento.png',
			titulo: 'Curso de Gestão de Projetos',
			data: new Date('2025-04-10'),
			local: 'Sala Multiuso',
			descricao: 'Ferramentas para gerenciamento de projetos.',
			inscricaoAberta: true
		},
		{
			id: 4,
			imagem: '../../assets/imagens/logo-card-evento.png',
			titulo: 'Palestra Motivacional',
			data: new Date('2025-04-14'),
			local: 'Auditório Principal',
			descricao: 'Inspire-se com histórias de superação.',
			inscricaoAberta: true
		},
		{
			id: 5,
			imagem: '../../assets/imagens/logo-card-evento.png',
			titulo: 'Assembleia Geral',
			data: new Date('2025-04-15'),
			local: 'Auditório Central',
			descricao: 'Assembleia para discussão de projetos da cooperativa.',
			inscricaoAberta: true
		},
		{
			id: 6,
			imagem: '../../assets/imagens/logo-card-evento.png',
			titulo: 'Workshop de Inovação',
			data: new Date('2025-04-22'),
			local: 'Sala de Conferências',
			descricao: 'Aprenda técnicas de inovação para o seu negócio.',
			inscricaoAberta: true
		},
		{
			id: 7,
			imagem: '../../assets/imagens/logo-card-evento.png',
			titulo: 'Palestra sobre Sustentabilidade',
			data: new Date('2025-04-25'),
			local: 'Auditório Verde',
			descricao: 'Como implementar práticas sustentáveis no dia a dia.',
			inscricaoAberta: true
		},
		{
			id: 8,
			imagem: '../../assets/imagens/logo-card-evento.png',
			titulo: 'Treinamento Financeiro',
			data: new Date('2025-04-28'),
			local: 'Sala 101',
			descricao: 'Gestão de finanças pessoais e investimentos.',
			inscricaoAberta: true
		}
	];

	ngOnInit(): void {
		this.verificarDisponibilidadeEventos();
	}

	verificarDisponibilidadeEventos(): void {
		const hoje = new Date();
		hoje.setHours(0, 0, 0, 0);

		this.eventos.forEach(evento => {
			const dataEvento = new Date(evento.data);
			dataEvento.setHours(0, 0, 0, 0);

			if (dataEvento <= hoje) {
				evento.inscricaoAberta = false;
			}
		});
	}

	inscrever(evento: Evento): void {
		if (evento.inscricaoAberta) {
			this.mostrarAlerta('sucesso', `Inscrição realizada com sucesso para o evento: ${evento.titulo}`);
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
		}, 2000);
	}

	fecharAlerta(): void {
		this.alerta.visivel = false;
	}

	formatarData(data: Date): string {
		return data.toLocaleDateString('pt-BR');
	}
}