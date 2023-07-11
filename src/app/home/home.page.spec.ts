import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HomePage } from './home.page';
import { DBTaskService } from '../services/db-task.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let dbTaskServiceSpy: jasmine.SpyObj<DBTaskService>;

  beforeEach(async(() => {
    const dbTaskServiceMock = jasmine.createSpyObj('DBTaskService', ['hasActiveSession']);

    TestBed.configureTestingModule({
      declarations: [HomePage],
      providers: [{ provide: DBTaskService, useValue: dbTaskServiceMock }],
    }).compileComponents();

    dbTaskServiceSpy = TestBed.inject(DBTaskService) as jasmine.SpyObj<DBTaskService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call checkActiveSession on initialization', () => {
    expect(dbTaskServiceSpy.hasActiveSession).toHaveBeenCalled();
  });

  it('should log "Hay una sesión activa" when hasActiveSession returns true', async () => {
    dbTaskServiceSpy.hasActiveSession.and.returnValue(Promise.resolve(true));

    spyOn(console, 'log');

    await component.checkActiveSession();

    expect(console.log).toHaveBeenCalledWith('Hay una sesión activa');
  });

  it('should log "No hay una sesión activa" when hasActiveSession returns false', async () => {
    dbTaskServiceSpy.hasActiveSession.and.returnValue(Promise.resolve(false));

    spyOn(console, 'log');

    await component.checkActiveSession();

    expect(console.log).toHaveBeenCalledWith('No hay una sesión activa');
  });
});
