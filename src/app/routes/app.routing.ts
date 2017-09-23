import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from '../components/authentication/authentication.component';
import { MessagesComponent } from '../components/messages/messages.component';

import { AUTH_ROUTES } from './auth.routing';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);