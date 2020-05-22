import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  usuario;
  formularioRegistro: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    private formBuilder: FormBuilder
  ) {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      avatar: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  crearUsuario(datos) {
    this.usuariosService.consultarEmail(datos).subscribe(
      (usuario) => {
        // this.usuario = usuario;
        this.usuariosService.registrarUsuario(datos).subscribe(
          (usuario1) => {
            this.usuario = usuario1;
            alert('Usuario creado con exito');
          },
          (respuesta) => {
            // console.log(error);
            alert(respuesta.error.mensaje);
          }
        );
      },
      (respuesta) => {
        // console.log(error);
        alert(respuesta.error.mensaje);
      }
    );
  }
}
