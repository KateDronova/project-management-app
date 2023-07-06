import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConfirmationInterface } from '../../boards/models/confirmation-interface';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  private confirm$ = new Subject<ConfirmationInterface>

  constructor() { }

  setConfirm(confirmation: ConfirmationInterface): void {
    this.confirm$.next(confirmation);
  }

  getConfirm(): Observable<ConfirmationInterface> {
    return this.confirm$.asObservable();
  }
}
