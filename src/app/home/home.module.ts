import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ExperiencialaboralcomponentComponent } from '../experiencialaboralcomponent/experiencialaboralcomponent.component';
import { CertificacionescomponentComponent } from '../certificacionescomponent/certificacionescomponent.component';
import { MisdatoscomponentComponent } from '../misdatoscomponent/misdatoscomponent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule
  ],
  declarations: [HomePage,
    ExperiencialaboralcomponentComponent,
    CertificacionescomponentComponent,
    MisdatoscomponentComponent,
   
  ],
})
export class HomePageModule {}
export class AppModule { }
