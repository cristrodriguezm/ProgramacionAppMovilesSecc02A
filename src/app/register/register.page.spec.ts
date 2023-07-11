import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterPage } from './register.page';
import { DBTaskService } from '../services/db-task.service';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let formBuilder: FormBuilder;
  let dbTaskService: DBTaskService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, RouterTestingModule],
      providers: [FormBuilder, DBTaskService],
    }).compileComponents();

    formBuilder = TestBed.inject(FormBuilder);
    dbTaskService = TestBed.inject(DBTaskService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    component.registerForm = formBuilder.group({
      username: '',
      password: '',
      confirmPassword: '',
    });
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with the correct controls', () => {
    expect(component.registerForm.get('username')).toBeTruthy();
    expect(component.registerForm.get('password')).toBeTruthy();
    expect(component.registerForm.get('confirmPassword')).toBeTruthy();
  });

  it('should have required validators on username and confirmPassword controls', () => {
    const usernameControl = component.registerForm.get('username');
    const confirmPasswordControl = component.registerForm.get('confirmPassword');

    expect(usernameControl?.hasValidator(Validators.required)).toBe(true);
    expect(confirmPasswordControl?.hasValidator(Validators.required)).toBe(true);
  });

  it('should have minLength and maxLength validators on username control', () => {
    const usernameControl = component.registerForm.get('username');

    expect(usernameControl?.hasValidator(Validators.minLength(3))).toBe(true);
    expect(usernameControl?.hasValidator(Validators.maxLength(8))).toBe(true);
  });

  it('should have pattern validator on password control', () => {
    const passwordControl = component.registerForm.get('password');

    expect(passwordControl?.hasValidator(Validators.pattern('^[0-9]{4}$'))).toBe(true);
  });

  it('should call registerSession and navigate to login page when form is valid', () => {
    const username = 'testuser';
    const password = '1234';
    const registerSessionSpy = spyOn(dbTaskService, 'registerSession');
    const navigateSpy = spyOn(component['router'], 'navigate');

    component.registerForm.setValue({
      username: username,
      password: password,
      confirmPassword: password,
    });
    component.onSubmit();

    expect(registerSessionSpy).toHaveBeenCalledWith(username, password);
    expect(navigateSpy).toHaveBeenCalledWith(['/login'], { queryParams: { username: username, password: password } });
  });

  it('should not call registerSession and navigate to login page when form is invalid', () => {
    const registerSessionSpy = spyOn(dbTaskService, 'registerSession');
    const navigateSpy = spyOn(component['router'], 'navigate');

    component.onSubmit();

    expect(registerSessionSpy).not.toHaveBeenCalled();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  it('should reset the form when clearForm is called', () => {
    component.registerForm.setValue({
      username: 'testuser',
      password: '1234',
      confirmPassword: '1234',
    });

    component.clearForm();

    expect(component.registerForm.value).toEqual({
      username: '',
      password: '',
      confirmPassword: '',
    });
  });
});
