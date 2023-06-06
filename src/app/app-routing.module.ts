import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ParquesPage } from './parques/parques.page';
import { CampanaPage } from './parques/campana/campana.page';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
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
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsPageModule)
  },
  {
    path: 'parques',
    loadChildren: () => import('./parques/parques.module').then(m => m.ParquesPageModule)
  },
  {
    path: 'parques/campana',
    loadChildren: () => import('./parques/campana/campana.module').then(m => m.CampanaPageModule)
  },
  {
    path: 'parques/metropolitano',
    loadChildren: () => import('./parques/metropolitano/metropolitano.module').then(m => m.MetropolitanoPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

