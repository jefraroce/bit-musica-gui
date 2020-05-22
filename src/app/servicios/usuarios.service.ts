import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// Añade principios reactivos
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private usuarioAutenticado = null;
  private autenticacion = new BehaviorSubject<{}>({});

  autenticacion$ = this.autenticacion.asObservable();

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
    this.usuarioAutenticado = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.autenticacion.next(this.usuarioAutenticado);
  }

  borrarLocalStorage() {
    localStorage.removeItem('usuario');
    this.usuarioAutenticado = null;
    this.autenticacion.next(null);
  }

  consultarLocalStorage() {
    this.usuarioAutenticado = JSON.parse(localStorage.getItem('usuario'));
    this.autenticacion.next(this.usuarioAutenticado);
    return this.usuarioAutenticado;
  }

  registrarUsuario(datos) {
    return this.http.post(`${environment.API_URL}/usuarios/`, datos);
  }

  consultarEmail(datos) {
    return this.http.post(`${environment.API_URL}/usuarios/email`, datos);
  }
}

