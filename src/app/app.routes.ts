import { Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { ServicosComponent} from './servicos/servicos.component';
import { ConsultoriaComponent} from './consultoria/consultoria.component';
import { EducacaoComponent} from './educacao/educacao.component';
import { TreinamentoComponent} from './treinamento/treinamento.component';
import { ApoioFinanceiroComponent} from './apoio-financeiro/apoio-financeiro.component';
import { EventoComponent } from './evento/evento.component';
import { NoticiaListaComponent } from './noticia-lista/noticia-lista.component';
import { NoticiaDetalheComponent } from './noticia-detalhe/noticia-detalhe.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'contato', component: ContatoComponent },
	{ path: 'evento', component: EventoComponent },
	{ path: 'servicos', component: ServicosComponent },
	{ path: 'consultoria', component: ConsultoriaComponent },
	{ path: 'educacao', component: EducacaoComponent },
	{ path: 'treinamento', component: TreinamentoComponent },
	{ path: 'apoiofinanceiro', component: ApoioFinanceiroComponent },
	{ path: 'noticia', component: NoticiaListaComponent },
	{ path: 'noticia/:id', component: NoticiaDetalheComponent },


];
