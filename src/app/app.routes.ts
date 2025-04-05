import { Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { EventoComponent } from './evento/evento.component';

export const routes: Routes = [
	{ path: 'contato', component: ContatoComponent },
	{ path: 'evento', component: EventoComponent },
];
