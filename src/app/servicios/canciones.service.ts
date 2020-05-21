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
}
