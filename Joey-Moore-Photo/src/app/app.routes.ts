import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AppLogin } from './components/app-login/app-login';
import { Bookings } from './pages/bookings/bookings';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'login', component: AppLogin},


  { path: 'bookings', component: Bookings}

];
