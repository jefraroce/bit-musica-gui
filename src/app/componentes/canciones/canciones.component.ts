import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../../servicios/canciones.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {
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
  
  eliminarCancion(id) {
    this.cancionesService.eliminarCancion(id)
      .subscribe((resultado) => {
        this.cargarCanciones();
      },
      (error) => {
        console.error('Error eliminando cancion ', error);
      });
  }

}
