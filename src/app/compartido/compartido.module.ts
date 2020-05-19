import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieDePaginaComponent } from './componentes/pie-de-pagina/pie-de-pagina.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    PieDePaginaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CabeceraComponent,
    PieDePaginaComponent
  ]
})
export class CompartidoModule { }
