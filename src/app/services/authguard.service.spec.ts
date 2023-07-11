import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router'; // Importa Router
import { AuthGuard } from './authguard.service';
import { DBTaskService } from './db-task.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let dbTaskService: DBTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, DBTaskService],
    });
    guard = TestBed.inject(AuthGuard);
    dbTaskService = TestBed.inject(DBTaskService);
  });

  it('should allow access if user has an active session', async () => {
    spyOn(dbTaskService, 'hasActiveSession').and.returnValue(Promise.resolve(true));

    const canActivate = await guard.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(canActivate).toBe(true);
    expect(dbTaskService.hasActiveSession).toHaveBeenCalled();
  });

  it('should redirect to login page if user does not have an active session', async () => {
    spyOn(dbTaskService, 'hasActiveSession').and.returnValue(Promise.resolve(false));
    spyOn(TestBed.inject(Router), 'navigate');

    const canActivate = await guard.canActivate(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(canActivate).toBe(false);
    expect(dbTaskService.hasActiveSession).toHaveBeenCalled();
    expect(TestBed.inject(Router).navigate).toHaveBeenCalledWith(['/login']);
  });
});
