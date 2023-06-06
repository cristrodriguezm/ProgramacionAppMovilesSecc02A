import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampanaPage } from './campana.page';

const routes: Routes = [
  {
    path: '',
    component: CampanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampanaPageRoutingModule {}
