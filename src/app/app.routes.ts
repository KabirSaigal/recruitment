import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        component:LoginComponent,
        path: 'login',
    },
    {
        path: 'dashboard',
        canActivate: [authGuard],
        pathMatch: 'full',
        component: DashboardComponent,
    },
    {
        path: 'createJob',
        canActivate: [authGuard],
        pathMatch: 'full',
        component: CreateJobComponent,
    },
    {
        path: 'contact',
        canActivate: [authGuard],
        pathMatch: 'full',
        component: ContactComponent,
    }
];
