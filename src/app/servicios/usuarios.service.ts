import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  traerUsuarios() {
    return this.http.get(`${environment.API_URL}/usuarios`);
  }

  eliminarUsuario(id) {
    return this.http.delete(`${environment.API_URL}/usuarios/${id}`);
  }

  iniciarSesion(datos) {
    return this.http.post(`${environment.API_URL}/usuarios/login`, datos);
  }
  guardarLocalStorage(usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  borrarLocalStorage() {
    localStorage.setItem('usuario', ' ');
  }

  consultarLocalStorage() {
    return JSON.parse(localStorage.getItem('usuario'));
  }
}

