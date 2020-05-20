import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  traerUsuarios() {
    return this.http.get(`${environment.API_URL}/usuarios`);
  }

  eliminarUsuario(id) {
    return this.http.delete(`${environment.API_URL}/usuarios/${id}`);
  }
}
