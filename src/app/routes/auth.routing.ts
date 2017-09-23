import { Routes } from '@angular/router';

import { LogoutComponent } from '../components/logout/logout.component';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';

export const AUTH_ROUTES: Routes = [
    {path: '', redirectTo: 'signin', pathMatch: 'full'},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'logout', component: LogoutComponent}
];