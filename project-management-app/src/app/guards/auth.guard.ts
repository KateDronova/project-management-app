import { CanActivateFn, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inject } from '@angular/core';


@Injectable()
class UserToken { }

@Injectable()
class PermissionsService {
  canActivate(currentUser: UserToken, userId: string): boolean {
    return true;
  }
  canMatch(currentUser: UserToken): boolean {
    return true;
  }
}

export const authGuardFunction: CanActivateFn = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
  // return inject(PermissionsService).canActivate(inject(UserToken), route.params.id);
  return true;
};
