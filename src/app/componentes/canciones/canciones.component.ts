import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../../servicios/canciones.service';

@Component({
  selector: 'app-canciones',
  styleUrls: ['./canciones.component.scss'],
  templateUrl: './canciones.component.html',
})
export class CancionesComponent implements OnInit {
	
  tableSettings = {
	actions: {
	 add : false
	},
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
};	
	
  canciones: [];
  
  constructor(private cancionesService: CancionesService) { }

  ngOnInit(): void {
	  this.cargarCanciones()
  }
  
  cargarCanciones() {
    this.cancionesService.traerCanciones()
      .subscribe((canciones: []) => {
        this.canciones = canciones;
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
