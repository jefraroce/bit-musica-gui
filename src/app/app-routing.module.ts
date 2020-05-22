import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CancionesComponent } from './componentes/canciones/canciones.component';
import { MisCancionesComponent } from './componentes/mis-canciones/mis-canciones.component';

import { InicioDeSesionComponent } from './componentes/inicio-de-sesion/inicio-de-sesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AutenticacionGuard } from './guardianes/autenticacion.guard';

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
        canActivate: [AutenticacionGuard],
        component: ListaUsuariosComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'canciones',
        canActivate: [AutenticacionGuard],
        component: CancionesComponent,
      },
      {
        path: 'inicio-de-sesion',
        component: InicioDeSesionComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent,
      },
      {
        path: 'reproductor',
        canActivate: [AutenticacionGuard],
        component: MisCancionesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
