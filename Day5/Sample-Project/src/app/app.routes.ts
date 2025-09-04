import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { BugsComponent } from './pages/bugs/bugs';
import { LoginnComponent } from './pages/loginn/loginn';
import { AddBugComponent } from './pages/add-bug/add-bug';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component: LoginnComponent, title: 'Login'},
    {path:'dashboard', component: DashboardComponent, title:'Dashboard', canActivate: [AuthGuard]},
    {path:'bugs', component: BugsComponent, title: 'Bugs', canActivate: [AuthGuard]},
    {path:'add-bug', component: AddBugComponent, title: 'Add Bug', canActivate: [AuthGuard]},
    {path:'**', redirectTo:'login'} //fallback
];
