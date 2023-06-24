import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/authguard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule),
    canActivate: [AuthGuard] // Proteger la ruta folder/:id con el guardia de rutas
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard] // Proteger la ruta home con el guardia de rutas
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsPageModule),
    canActivate: [AuthGuard] // Proteger la ruta about-us con el guardia de rutas
  },
  {
    path: 'parques',
    loadChildren: () => import('./parques/parques.module').then(m => m.ParquesPageModule),
    canActivate: [AuthGuard] // Proteger la ruta parques con el guardia de rutas
  },
  {
    path: 'parques/campana',
    loadChildren: () => import('./parques/campana/campana.module').then(m => m.CampanaPageModule),
    canActivate: [AuthGuard] // Proteger la ruta parques/campana con el guardia de rutas
  },
  {
    path: 'parques/metropolitano',
    loadChildren: () => import('./parques/metropolitano/metropolitano.module').then(m => m.MetropolitanoPageModule),
    canActivate: [AuthGuard] // Proteger la ruta parques/metropolitano con el guardia de rutas
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule),
    canActivate: [AuthGuard] // Proteger la ruta mapa con el guardia de rutas
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

