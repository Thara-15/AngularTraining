import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProjectsComponent } from './pages/projects/projects';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: '**', redirectTo: ''} // Redirect to home for any unknown paths
];
