import { Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { ServicosComponent} from './servicos/servicos.component';
import { ConsultoriaComponent} from './consultoria/consultoria.component';
import { EducacaoComponent} from './educacao/educacao.component';
import { TreinamentoComponent} from './treinamento/treinamento.component';
import { ApoioFinanceiroComponent} from './apoio-financeiro/apoio-financeiro.component';

export const routes: Routes = [
	{ path: 'contato', component: ContatoComponent },
	{ path: 'servicos', component: ServicosComponent },
	{ path: 'consultoria', component: ConsultoriaComponent },
	{ path: 'educacao', component: EducacaoComponent },
	{ path: 'treinamento', component: TreinamentoComponent },
	{ path: 'apoiofinanceiro', component: ApoioFinanceiroComponent },

];
