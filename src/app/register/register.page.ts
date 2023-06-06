import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const username = this.registerForm.value.username;
      const password = this.registerForm.value.password;
      console.log('Nuevo usuario:', username);
      console.log('Contraseña:', password);

      // Realizar acciones de registro

      // Redirigir a la página de inicio de sesión
      this.router.navigate(['/login']);
    } else {
      console.log('El formulario no es válido');
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      if (passwordControl.value === confirmPasswordControl.value) {
        confirmPasswordControl.setErrors(null);
      } else {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      }
    }
  }

  clearForm() {
    this.registerForm.reset();
  }
}

