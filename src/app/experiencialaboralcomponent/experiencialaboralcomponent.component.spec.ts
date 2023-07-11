import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ExperiencialaboralcomponentComponent } from './experiencialaboralcomponent.component';

describe('ExperiencialaboralcomponentComponent', () => {
  let component: ExperiencialaboralcomponentComponent;
  let fixture: ComponentFixture<ExperiencialaboralcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExperiencialaboralcomponentComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencialaboralcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(component.experienciaForm.value).toEqual({
      empresa: '',
      anioInicio: '',
      actualmenteTrabaja: false,
      anioTermino: '',
      cargo: '',
    });
  });

  it('should add an experience when guardarExperienciaLaboral is called with valid form', () => {
    const mockExperience = {
      empresa: 'Example Company',
      anioInicio: '2020',
      actualmenteTrabaja: false,
      anioTermino: '2022',
      cargo: 'Example Position',
    };

    component.experienciaForm.setValue(mockExperience);
    component.guardarExperienciaLaboral();

    expect(component.experiencias.length).toBe(1);
    expect(component.experiencias[0]).toEqual(mockExperience);
  });

  it('should not add an experience when guardarExperienciaLaboral is called with invalid form', () => {
    component.guardarExperienciaLaboral();

    expect(component.experiencias.length).toBe(0);
  });

  it('should remove an experience when eliminarExperienciaLaboral is called', () => {
    const mockExperience = {
      empresa: 'Example Company',
      anioInicio: '2020',
      actualmenteTrabaja: false,
      anioTermino: '2022',
      cargo: 'Example Position',
    };

    component.experiencias.push(mockExperience);
    component.eliminarExperienciaLaboral(0);

    expect(component.experiencias.length).toBe(0);
  });

  it('should reset the form when limpiarFormulario is called', () => {
    const mockExperience = {
      empresa: 'Example Company',
      anioInicio: '2020',
      actualmenteTrabaja: false,
      anioTermino: '2022',
      cargo: 'Example Position',
    };

    component.experienciaForm.setValue(mockExperience);
    component.limpiarFormulario();

    expect(component.experienciaForm.value).toEqual({
      empresa: '',
      anioInicio: '',
      actualmenteTrabaja: false,
      anioTermino: '',
      cargo: '',
    });
  });
});
