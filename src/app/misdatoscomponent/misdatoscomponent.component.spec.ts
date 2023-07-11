import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MisdatoscomponentComponent } from './misdatoscomponent.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';

describe('MisdatoscomponentComponent', () => {
  let component: MisdatoscomponentComponent;
  let fixture: ComponentFixture<MisdatoscomponentComponent>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;
  let formBuilder: FormBuilder;

  beforeEach(waitForAsync(() => {
    const alertControllerMock = jasmine.createSpyObj('AlertController', ['create']);

    TestBed.configureTestingModule({
      declarations: [MisdatoscomponentComponent],
      imports: [IonicModule.forRoot(), ReactiveFormsModule],
      providers: [
        { provide: AlertController, useValue: alertControllerMock },
      ],
    }).compileComponents();

    alertControllerSpy = TestBed.inject(AlertController) as jasmine.SpyObj<AlertController>;
    formBuilder = TestBed.inject(FormBuilder);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisdatoscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the userInfoForm correctly', () => {
    expect(component.userInfoForm.get('nombre')).toBeTruthy();
    expect(component.userInfoForm.get('apellido')).toBeTruthy();
    expect(component.userInfoForm.get('nivelEducacion')).toBeTruthy();
    expect(component.userInfoForm.get('fechaNacimiento')).toBeTruthy();
  });

  it('should call alertController.create and alertController.present when mostrarInformacion is called', async () => {
    const alertSpyObj = jasmine.createSpyObj('Alert', ['present']);
    alertControllerSpy.create.and.returnValue(Promise.resolve(alertSpyObj));

    component.userInfoForm.setValue({
      nombre: 'John',
      apellido: 'Doe',
      nivelEducacion: 'Universidad',
      fechaNacimiento: '1990-01-01',
    });

    await component.mostrarInformacion();

    expect(alertControllerSpy.create).toHaveBeenCalled();
    expect(alertSpyObj.present).toHaveBeenCalled();
  });

  it('should reset the userInfoForm after 1 second when limpiarCampos is called', async () => {
    spyOn(component.userInfoForm, 'reset');

    component.limpiarCampos();

    expect(component.isClearing).toBeTruthy();
    expect(component.userInfoForm.reset).not.toHaveBeenCalled();

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(component.isClearing).toBeFalsy();
    expect(component.userInfoForm.reset).toHaveBeenCalled();
  });
});
