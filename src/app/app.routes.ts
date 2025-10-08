import type { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
];
