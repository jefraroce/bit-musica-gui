import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../../servicios/canciones.service';

@Component({
  selector: 'app-canciones',
  styleUrls: ['./canciones.component.scss'],
  templateUrl: './canciones.component.html',
})
export class CancionesComponent implements OnInit {

  tableSettings = {
    columns: {
      nombre: {
        title: 'Nombre'
      },
      artista: {
        title: 'Artista'
      },
      album: {
        title: 'Album'
      },
      enlace: {
        title: 'Enlace'
      }
    },
    delete: {
      confirmDelete: true
    },
    edit: {
      confirmSave: true
    },
    add: {
      confirmCreate: true
    }
  };

  canciones: [];

  constructor(private cancionesService: CancionesService) { }

  ngOnInit(): void {
    this.cargarCanciones();
  }

  cargarCanciones() {
    this.cancionesService.traerCanciones()
      .subscribe((canciones: []) => {
        this.canciones = canciones;
        setTimeout(() => {
          [].forEach.call(document.querySelectorAll('a.ng2-smart-action.ng2-smart-action-edit-edit'), (link) => {
            link.classList.add('btn', 'btn-sm', 'btn-link', 'text-light');
            link.innerHTML = 'Editar';
            link.style.fontWeight = '600';
          });
          [].forEach.call(document.querySelectorAll('a.ng2-smart-action.ng2-smart-action-delete-delete'), (link) => {
            link.classList.add('btn', 'btn-sm', 'btn-link', 'text-danger');
            link.innerHTML = 'Eliminar';
            link.style.fontWeight = '600';
          });
        }, 1500);
      });
  }

  crearCancion(event) {
    var cancionNueva = {
      "nombre": event.newData.nombre,
      "artista": event.newData.artista,
      "album": event.newData.album,
      "enlace": event.newData.enlace
    };
    this.cancionesService.crearCancion(cancionNueva)
      .subscribe((resultado) => {
        this.cargarCanciones();
      },
        (error) => {
          console.error('Error creando cancion ', error);
        });
  }

  editarCancion(event) {
    var cancionEditada = {
      "nombre": event.newData.nombre,
      "artista": event.newData.artista,
      "album": event.newData.album,
      "enlace": event.newData.enlace
    };
    this.cancionesService.editarCancion(event.newData._id, cancionEditada)
      .subscribe((resultado) => {
        this.cargarCanciones();
      },
        (error) => {
          console.error('Error editando cancion ', error);
        });
  }

  borrarCancion(event) {
    this.cancionesService.eliminarCancion(event.data._id)
      .subscribe((resultado) => {
        this.cargarCanciones();
      },
        (error) => {
          console.error('Error eliminando cancion ', error);
        });
  }

}
