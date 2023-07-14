import { CanMatchFn, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

export const matchingGuardFunction: CanMatchFn = (route, segments) => {
  // public canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
  //   console.log('check Loading Guard');
  return true;
};
