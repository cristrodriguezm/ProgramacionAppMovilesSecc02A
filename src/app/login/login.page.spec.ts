import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { DBTaskService } from '../services/db-task.service';
import { of } from 'rxjs';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let routerSpy: jasmine.SpyObj<Router>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;
  let dbTaskServiceSpy: jasmine.SpyObj<DBTaskService>;
  let formBuilder: FormBuilder;

  beforeEach(async(() => {
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);
    const alertControllerMock = jasmine.createSpyObj('AlertController', ['create']);
    const dbTaskServiceMock = jasmine.createSpyObj('DBTaskService', ['validateUser', 'updateSessionActiveState']);

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AlertController, useValue: alertControllerMock },
        { provide: DBTaskService, useValue: dbTaskServiceMock },
      ],
    }).compileComponents();

    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    alertControllerSpy = TestBed.inject(AlertController) as jasmine.SpyObj<AlertController>;
    dbTaskServiceSpy = TestBed.inject(DBTaskService) as jasmine.SpyObj<DBTaskService>;
    formBuilder = TestBed.inject(FormBuilder);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the loginForm correctly', () => {
    expect(component.loginForm.get('username')).toBeTruthy();
    expect(component.loginForm.get('password')).toBeTruthy();
  });

  it('should call mostrarAlerta when loginForm is invalid', async () => {
    spyOn(component, 'mostrarAlerta');

    component.loginForm.setValue({
      username: '',
      password: '',
    });

    await component.onSubmit();

    expect(component.mostrarAlerta).toHaveBeenCalled();
  });

  it('should call dbTaskService.validateUser and navigate to /home when loginForm is valid', async () => {
    component.loginForm.setValue({
      username: 'testuser',
      password: '1234',
    });

    dbTaskServiceSpy.validateUser.and.returnValue(of(true) as any);

    await component.onSubmit();

    expect(dbTaskServiceSpy.validateUser).toHaveBeenCalledWith('testuser', '1234');
    expect(dbTaskServiceSpy.updateSessionActiveState).toHaveBeenCalledWith('testuser', true);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should call mostrarAlerta when dbTaskService.validateUser returns false', async () => {
    component.loginForm.setValue({
      username: 'testuser',
      password: '1234',
    });

    dbTaskServiceSpy.validateUser.and.returnValue(of(false) as any);

    spyOn(component, 'mostrarAlerta');

    await component.onSubmit();

    expect(component.mostrarAlerta).toHaveBeenCalled();
  });

  it('should call alertController.create and alertController.present when mostrarAlerta is called', async () => {
    const alertSpyObj = jasmine.createSpyObj('Alert', ['present']);
    alertControllerSpy.create.and.returnValue(Promise.resolve(alertSpyObj) as any);

    await component.mostrarAlerta();

    expect(alertControllerSpy.create).toHaveBeenCalled();
    expect(alertSpyObj.present).toHaveBeenCalled();
  });

  it('should call router.navigate when goToRegister is called', () => {
    component.goToRegister();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/register']);
  });

  it('should reset the loginForm when clearFields is called', () => {
    spyOn(component.loginForm, 'reset');

    component.clearFields();

    expect(component.loginForm.reset).toHaveBeenCalled();
  });
});
