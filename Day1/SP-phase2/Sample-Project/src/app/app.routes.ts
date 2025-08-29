import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { BugsComponent } from './pages/bugs/bugs';
import { LoginnComponent } from './pages/loginn/loginn';

export const routes: Routes = [
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component: DashboardComponent, title:'Dashboard'},
    {path:'bugs', component: BugsComponent, title: 'Bugs'},
    {path:'login', component: LoginnComponent, title: 'Login'},
    {path:'**', redirectTo:'dashboard'} //fallback
];
