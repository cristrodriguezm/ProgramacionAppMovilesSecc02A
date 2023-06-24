import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-experiencialaboralcomponent',
  templateUrl: './experiencialaboralcomponent.component.html',
  styleUrls: ['./experiencialaboralcomponent.component.scss']
})
export class ExperiencialaboralcomponentComponent {
  experienciaForm: FormGroup;
  experiencias: any[] = [];

  currentYear: number;

  constructor(private formBuilder: FormBuilder) {
    this.currentYear = new Date().getFullYear();

    this.experienciaForm = this.formBuilder.group({
      empresa: ['', Validators.required],
      anioInicio: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
      actualmenteTrabaja: [false],
      anioTermino: [''], // No requerido inicialmente
      cargo: ['', Validators.required]
    });
  }

  guardarExperienciaLaboral() {
    if (this.experienciaForm.invalid) {
      return;
    }

    const experiencia = {
      empresa: this.experienciaForm.value.empresa,
      anioInicio: this.experienciaForm.value.anioInicio,
      actualmenteTrabaja: this.experienciaForm.value.actualmenteTrabaja,
      anioTermino: this.experienciaForm.value.actualmenteTrabaja ? '' : this.experienciaForm.value.anioTermino,
      cargo: this.experienciaForm.value.cargo
    };

    this.experiencias.push(experiencia);
    this.limpiarFormulario();
  }

  eliminarExperienciaLaboral(index: number) {
    this.experiencias.splice(index, 1);
  }

  limpiarFormulario() {
    this.experienciaForm.reset();
  }
}

