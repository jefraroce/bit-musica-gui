import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../servicios/mensajes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  formularioMensaje: FormGroup;

  constructor(
      private mensajesService: MensajesService,
      private formBuilder: FormBuilder
    ) {
    this.formularioMensaje = this.formBuilder.group({
      nombre: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  enviarMensaje(mensaje) {
    console.log(mensaje);
  }
}
