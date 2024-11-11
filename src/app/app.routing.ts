import { ModuleWithProviders } from "@angular/core";
import { Router, RouterModule, Routes} from  '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from "./components/home/home.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre-mi', component: AboutComponent },
    { path: 'proyectos', component: ProjectsComponent },
    { path: 'contacto', component: ContactComponent },
    { path: '**', redirectTo: 'error' }  // Redirigir a la página de error para cualquier ruta no definida
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);