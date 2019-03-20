import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from '../services/service.index';
import { UserComponent } from './users/user.component';
import { EmployeesComponent } from './employees/employees.component';

const pagesRoutes: Routes = [
    { path: '', component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
            { path: 'home', component: HomeComponent },
            { path: 'employees', component: EmployeesComponent},
            { path: 'users/:id', component: UserComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
