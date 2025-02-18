import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path:'info',
    loadComponent: () => import('./pages/info-page/info-page.component'),
  },
  // {
  //   path:'datos/:id',
  //   loadComponent: () => import('./detalle-datos/detalle-datos.component'),
  // },
   {
     path: '**',
     redirectTo: '',
  }
];
