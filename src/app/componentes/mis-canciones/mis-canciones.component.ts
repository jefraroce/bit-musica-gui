import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../../servicios/canciones.service';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';


@Component({
  selector: 'app-mis-canciones',
  templateUrl: './mis-canciones.component.html',
  styleUrls: ['./mis-canciones.component.scss']
})
export class MisCancionesComponent implements OnInit {

  constructor(private cancionesService: CancionesService) { }

  ngOnInit(): void {
    this.cargarCanciones()
    console.log(this.tiempoReflejado(2,5))
  }

  canciones: [];
  numero: number = 0
  porcentaje = ""
  nombreDeCancion = "Elige una canción"
  cancionAreproducir = null
  tiempoRecorrido = 0
  progresoBarra = null
  nombreDeAlbum = ""


  cargarCanciones() {
    this.cancionesService.traerCanciones()
      .subscribe((canciones: []) => {
        this.canciones = canciones;
      });
  }

 tiempoReflejado(xi:number,yi:number){
  return (xi*100)/yi
 } 
  elegirCancion(cancion){
    
    if ( this.cancionAreproducir !== null){
      try {
        this.cancionAreproducir.pause();
        clearInterval(this.progresoBarra)
      }catch(error){
        console.log(this.cancionAreproducir)
      }
     } 
     this.cancionAreproducir = new Audio(cancion.enlace)
     console.log(this.cancionAreproducir.currentTime)
     this.cancionAreproducir.addEventListener("loadeddata",() => {
      this.reproducirCancion()

     })
      this.nombreDeCancion = cancion.nombre
      this.nombreDeAlbum = cancion.album
  }
  reproducirCancion(){
    if (this.cancionAreproducir.paused){
      this.cancionAreproducir.play();
      this.animar()
    } else {
      this.cancionAreproducir.pause();
      clearInterval(this.progresoBarra)
    }

  }

  animar(){
    this.progresoBarra = setInterval(  () => {
      this.tiempoRecorrido = Math.floor(this.cancionAreproducir.currentTime)
      this.numero = this.tiempoReflejado(this.tiempoRecorrido,this.cancionAreproducir.duration)
      this.porcentaje = "width:" + this.numero + "%"
    },100)
  }

}