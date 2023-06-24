import { DBTaskService } from './services/db-task.service';
import { Storage } from '@ionic/storage-angular'; // Importa el Storage

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ParquesPageModule } from './parques/parques.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    ParquesPageModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DBTaskService, // Agrega el servicio aquí
    Storage // Agrega el proveedor del Storage aquí
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
