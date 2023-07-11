import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CertificacionescomponentComponent } from './certificacionescomponent.component';

describe('CertificacionescomponentComponent', () => {
  let component: CertificacionescomponentComponent;
  let fixture: ComponentFixture<CertificacionescomponentComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificacionescomponentComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacionescomponentComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.certificacionForm.value).toEqual({
      nombreCertificado: '',
      fechaObtencion: '',
      certificadoVencimiento: false,
      fechaVencimiento: '',
    });
  });

  it('should add a certificacion when guardarCertificacion is called with valid form', () => {
    const certificacion = {
      nombreCertificado: 'Certificado 1',
      fechaObtencion: '2023-07-01',
      certificadoVencimiento: true,
      fechaVencimiento: '2024-07-01',
    };

    component.certificacionForm.setValue(certificacion);
    component.guardarCertificacion();

    expect(component.certificaciones.length).toBe(1);
    expect(component.certificaciones[0]).toEqual(certificacion);
  });

  it('should reset the form when limpiarCampos is called', () => {
    component.certificacionForm.setValue({
      nombreCertificado: 'Certificado 1',
      fechaObtencion: '2023-07-01',
      certificadoVencimiento: true,
      fechaVencimiento: '2024-07-01',
    });

    component.limpiarCampos();

    expect(component.certificacionForm.value).toEqual({
      nombreCertificado: '',
      fechaObtencion: '',
      certificadoVencimiento: false,
      fechaVencimiento: '',
    });
  });

  it('should remove a certificacion when eliminarCertificacion is called', () => {
    const certificacion = {
      nombreCertificado: 'Certificado 1',
      fechaObtencion: '2023-07-01',
      certificadoVencimiento: true,
      fechaVencimiento: '2024-07-01',
    };

    component.certificaciones = [certificacion];
    component.eliminarCertificacion(certificacion);

    expect(component.certificaciones.length).toBe(0);
  });
});
