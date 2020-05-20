import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarUsuarios()
  }

  cargarUsuarios() {
    this.usuariosService.traerUsuarios()
      .subscribe((usuarios: []) => {
        this.usuarios = usuarios;
      });
  }

  eliminarUsuario(id) {
    this.usuariosService.eliminarUsuario(id)
      .subscribe((resultado) => {
        this.cargarUsuarios();
      },
      (error) => {
        console.error('Error eliminando usuario ', error);
      });
  }
}
