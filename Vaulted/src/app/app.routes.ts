// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { MainComponent } from './core/components/main';
// import actual RegisterComponent when available
// import { RegisterComponent } from './core/components/register';

export const routes: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full' },
    { path: 'register', component: MainComponent }, // replace with RegisterComponent
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
