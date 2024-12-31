import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('mfe-home/Component').then(m => m.AppComponent)
  },
  {
    path: 'simulate',
    loadComponent: () =>
      import('mfe-simulate/Component').then(m => m.AppComponent)
  },
];
