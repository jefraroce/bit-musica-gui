import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompartidoModule } from './compartido/compartido.module';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SimplebarAngularModule } from 'simplebar-angular';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CancionesComponent } from './componentes/canciones/canciones.component';
import { MisCancionesComponent } from './componentes/mis-canciones/mis-canciones.component';
import { InicioDeSesionComponent } from './componentes/inicio-de-sesion/inicio-de-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    InicioComponent,
    ListaUsuariosComponent,
    ContactoComponent,
    CancionesComponent,
    MisCancionesComponent,
    InicioDeSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidoModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    BrowserModule,
    SimplebarAngularModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
