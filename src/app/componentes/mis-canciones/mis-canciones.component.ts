import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../../servicios/canciones.service';


@Component({
  selector: 'app-mis-canciones',
  templateUrl: './mis-canciones.component.html',
  styleUrls: ['./mis-canciones.component.scss']
})
export class MisCancionesComponent implements OnInit {

  constructor(private cancionesService: CancionesService) { }

  ngOnInit(): void {
    this.cargarCanciones()
  }

  canciones: [];
  numero: number = 25
  porcentaje = "width:" + 25 + "%"

  cargarCanciones() {
    this.cancionesService.traerCanciones()
      .subscribe((canciones: []) => {
        this.canciones = canciones;
      });
  }
  reproducirCancion(cancion){
    if (!cancion.audio){
      cancion.audio = new Audio(cancion.enlace);
      cancion.audio.addEventListener('loadeddata', () => {
      cancion.duracion = cancion.audio.duration;
     })
    }
    
    if (cancion.audio.paused){
      cancion.audio.play();
      
    } else {
      cancion.audio.pause();
    }

  }

}
