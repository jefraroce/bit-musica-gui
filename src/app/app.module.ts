import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompartidoModule } from './compartido/compartido.module';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    InicioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
