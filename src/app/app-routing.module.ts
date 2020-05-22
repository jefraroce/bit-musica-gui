import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CancionesComponent } from './componentes/canciones/canciones.component';
import { InicioDeSesionComponent } from './componentes/inicio-de-sesion/inicio-de-sesion.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'usuarios',
        component: ListaUsuariosComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'canciones',
        component: CancionesComponent,
      },
      {
        path: 'inicio-de-sesion',
        component: InicioDeSesionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
