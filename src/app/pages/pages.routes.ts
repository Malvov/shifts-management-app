import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from '../services/service.index';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user.component';

const pagesRoutes: Routes = [
    { path: '', component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
            { path: 'home', component: HomeComponent },
            { path: 'users', component: UsersComponent },
            { path: 'users/:id', component: UserComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
