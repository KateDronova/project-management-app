import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConfirmationInterface } from '../../boards/models/confirmation-interface';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  private confirm$ = new Subject<ConfirmationInterface>
  public idToDelete = 0

  private notifyOfDeletion = new Subject<void>();
  notifyOfDeletionChanges$ = this.notifyOfDeletion.asObservable();

  constructor() { }

  triggerItemListChange(): void {
    this.notifyOfDeletion.next();
  }

  setConfirm(confirmation: ConfirmationInterface, id: number): void {
    this.confirm$.next(confirmation);
    this.idToDelete = id;
  }

  getConfirm(): Observable<ConfirmationInterface> {
    return this.confirm$.asObservable();
  }
}
