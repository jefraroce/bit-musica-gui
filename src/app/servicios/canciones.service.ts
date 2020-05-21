import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CancionesService {

  constructor(private http: HttpClient) { }

  traerCanciones() {
    return this.http.get(`${environment.API_URL}/canciones`);
  }

  eliminarCancion(id) {
    return this.http.delete(`${environment.API_URL}/canciones/${id}`);
  }
  
  editarCancion(id, cancion) {
    return this.http.put(`${environment.API_URL}/canciones/${id}`, cancion);
  }
  
  crearCancion(cancion) {
    return this.http.post(`${environment.API_URL}/canciones`, cancion);
  }
}
