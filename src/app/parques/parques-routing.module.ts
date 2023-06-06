import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParquesPage } from './parques.page';
import { CampanaPage } from './campana/campana.page';

const routes: Routes = [
  {
    path: '',
    component: ParquesPage
  },
  {
    path: 'campana',
    component: CampanaPage
  },
  {
    path: 'metropolitano',
    loadChildren: () => import('./metropolitano/metropolitano.module').then( m => m.MetropolitanoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParquesPageRoutingModule {}

