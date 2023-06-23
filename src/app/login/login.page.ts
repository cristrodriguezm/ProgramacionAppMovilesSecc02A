import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DBTaskService } from '../services/db-task.service';

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
    private alertController: AlertController,
    private dbTaskService: DBTaskService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
    });
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o contraseña inválida',
      buttons: ['OK']
    });

    await alert.present();
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      console.log('Usuario:', username);
      console.log('Contraseña:', password);

      const isValidUser = await this.dbTaskService.validateUser(username, password);

      if (isValidUser) {
        await this.dbTaskService.updateSessionActiveState(username, true);
        this.router.navigate(['/home']);
      } else {
        this.mostrarAlerta();
      }
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
