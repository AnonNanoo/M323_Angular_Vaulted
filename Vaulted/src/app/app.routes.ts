import { Routes } from '@angular/router';
import { HelloNg } from './core/welcome/hello-ng';

export const routes: Routes = [
    { path: '', component:  HelloNg, pathMatch: 'full' }
];
