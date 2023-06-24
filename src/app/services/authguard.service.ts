import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DBTaskService } from './db-task.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private dbTaskService: DBTaskService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.dbTaskService.hasActiveSession().then(hasActiveSession => {
      if (hasActiveSession) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }
}  
