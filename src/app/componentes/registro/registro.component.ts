import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';
const swal = require('sweetalert');

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  formularioRegistro: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      avatar: ['', Validators.required],
      correoElectronico: ['', Validators.required, Validators.email],
      contrasena: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  crearUsuario(datos) {
    this.usuariosService.consultarEmail(datos).subscribe(
      (usuario) => {
        this.usuariosService.registrarUsuario(datos).subscribe(
          (usuario) => {
            this.usuariosService.guardarLocalStorage(usuario);
            swal('Exito', '¡Has quedado registrado!', 'success');
            setTimeout(() => {
              swal.close();
              this.router.navigate(['/reproductor']);
            }, 2000);
          },
          (respuesta) => {
            swal('Error', respuesta.error.mensaje, 'error');
          }
        );
      },
      (respuesta) => {
        swal('Error', respuesta.error.mensaje, 'error');
      }
    );
  }
}
