import { CanActivateFn, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '../core/services/users.service';


export const authGuardFunction: CanActivateFn = (route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> => {
  // const isLoggedIn = UsersService.isLoggedIn(); // Replace with your actual authentication service logic
  // if (isLoggedIn) {
  //   // User is authorized, allow activation
    // return true;
  // } else {
    // router.navigate(['/pma/welcome']);
    return true;
// }
}
