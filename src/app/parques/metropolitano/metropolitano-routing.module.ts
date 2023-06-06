import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetropolitanoPage } from './metropolitano.page';

const routes: Routes = [
  {
    path: '',
    component: MetropolitanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetropolitanoPageRoutingModule {}
