import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { ExperiencialaboralcomponentComponent } from '../experiencialaboralcomponent/experiencialaboralcomponent.component';
import { CertificacionescomponentComponent } from '../certificacionescomponent/certificacionescomponent.component';
import { MisdatoscomponentComponent } from '../misdatoscomponent/misdatoscomponent.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'experiencia',
        component: ExperiencialaboralcomponentComponent
      },
      {
        path: 'certificaciones',
        component: CertificacionescomponentComponent
      },
      {
        path: 'misdatos',
        component: MisdatoscomponentComponent
      },
      {
        path: '',
        redirectTo: 'experiencia',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
