import { Component } from '@angular/core';
import { ConfirmService } from './services/confirm.service';
import { ConfirmationType } from './models/confirmation-type';
import { RouterOutlet } from '@angular/router';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // confirmTypes = ConfirmationType;
  // constructor(private confirmService: ConfirmService) {}

  // showConfirmation(type: ConfirmationType) {
  //   this.confirmService.setConfirm({
  //     type,
  //     // question: 'Are ypo sure to delete ...?'
  //   });
  // }
}
