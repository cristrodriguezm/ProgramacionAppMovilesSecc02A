import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-certificacionescomponent',
  templateUrl: './certificacionescomponent.component.html',
  styleUrls: ['./certificacionescomponent.component.scss'],
})
export class CertificacionescomponentComponent implements OnInit {
  certificacionForm: FormGroup;
  certificaciones: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.certificacionForm = this.formBuilder.group({
      nombreCertificado: ['', Validators.required],
      fechaObtencion: ['', Validators.required],
      certificadoVencimiento: [false],
      fechaVencimiento: ['']
    });
    this.certificaciones = []; // Inicialización de la propiedad certificaciones
  }
  

  ngOnInit() {}

  guardarCertificacion() {
    if (this.certificacionForm.valid) {
      const certificacion = this.certificacionForm.value;
      this.certificaciones.push(certificacion);
      this.limpiarCampos();
    }
  }

  limpiarCampos() {
    this.certificacionForm.reset();
  }

  eliminarCertificacion(certificacion: any) {
    const index = this.certificaciones.indexOf(certificacion);
    if (index !== -1) {
      this.certificaciones.splice(index, 1);
    }
  }
}

