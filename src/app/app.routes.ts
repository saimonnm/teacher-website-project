import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((x) => x.Home),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'who-i-am',
    loadComponent: () =>
      import('./components/who-i-am/who-i-am').then((x) => x.WhoIAm),
  },
];
