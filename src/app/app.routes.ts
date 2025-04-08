import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
export const routes: Routes = [
    { path: 'inicio', component: HomeComponent }, 
    { path: '*', component: HomeComponent  }
   
 
];
