import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-misdatoscomponent',
  templateUrl: './misdatoscomponent.component.html',
  styleUrls: ['./misdatoscomponent.component.scss'],
})
export class MisdatoscomponentComponent {
  userInfoForm: FormGroup;
  isClearing: boolean = false;
  isShowing: boolean = false;

  constructor(
    private alertController: AlertController,
    private formBuilder: FormBuilder
  ) {
    this.userInfoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nivelEducacion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
    });
  }

  async mostrarInformacion() {
    const nombre = this.userInfoForm.value.nombre;
    const apellido = this.userInfoForm.value.apellido;
    const alert = await this.alertController.create({
      header: 'Información',
      message: `
      Apellido: ${apellido}
      Nombre: ${nombre} 
      `,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  limpiarCampos() {
    this.isClearing = true;
    setTimeout(() => {
      this.userInfoForm.reset();
      this.isClearing = false;
    }, 1000);
  }
}
