import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })

export const dataResolver: ResolveFn<boolean> = (route, state): any => {
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // }
  // console.log(route.data);
  // return timer(100).pipe(map(() => `current user id: ${route.params.id}`));
  return true;
};
