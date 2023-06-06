import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]{1,4}$')]],
    });
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o clave inválida',
      buttons: ['OK']
    });

    await alert.present();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      console.log('Usuario:', username);
      console.log('Contraseña:', password);

      // Redirigir a la página "Home" y pasar los datos
      this.router.navigate(['/home'], { queryParams: { username: username, password: password } });
    } else {
      this.mostrarAlerta();
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  clearFields() {
    this.loginForm.reset();
  }
}
