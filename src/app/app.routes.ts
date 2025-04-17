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
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { AreaColaboradorComponent } from './area-colaborador/area-colaborador.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ParceriasComponent } from './parcerias/parcerias.component';
import { AdicionarColaboradorComponent } from './adicionar-colaborador/adicionar-colaborador.component';
import { ColaboradoresAtivosComponent } from './colaboradores-ativos/colaboradores-ativos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
export const routes: Routes = [
	{ path: 'login', component: LoginComponent},
	{ path: 'perfil', component: PerfilComponent},
	{ path: 'registro', component: RegistroComponent},
   { path: 'home', component: HomeComponent },
   { path: 'sobre', component: SobreNosComponent },
	{ path: 'contato', component: ContatoComponent },
	{ path: 'evento', component: EventoComponent },
	{ path: 'servicos', component: ServicosComponent },
	{ path: 'consultoria', component: ConsultoriaComponent },
	{ path: 'educacao', component: EducacaoComponent },
	{ path: 'treinamento', component: TreinamentoComponent },
	{ path: 'apoiofinanceiro', component: ApoioFinanceiroComponent },
	{ path: 'noticia', component: NoticiaListaComponent },
	{ path: 'noticia/:id', component: NoticiaDetalheComponent },
	{ path: 'colaboradores', component: ColaboradoresComponent},
	{ path: 'area-colaborador', component: AreaColaboradorComponent},
	{ path: 'parcerias', component: ParceriasComponent},
	{ path: 'adicionar-colaborador', component: AdicionarColaboradorComponent},
	{ path: 'colaboradores-ativos', component: ColaboradoresAtivosComponent},
	{ path: '*', redirectTo: 'home', pathMatch: 'full' },
	{ path: '', redirectTo: 'home', pathMatch: 'full' },



];
