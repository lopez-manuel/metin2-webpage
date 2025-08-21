import { Routes } from '@angular/router';
import { HomeComponent } from './metin2/pages/home/home.component';
import { RegisterComponent } from './metin2/pages/register/register.component';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    }
];
