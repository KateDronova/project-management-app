import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfirmationInterface } from 'src/app/models/confirmation-interface';
import { ConfirmService } from 'src/app/services/confirm.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  // standalone: true,
  // imports: [CommonModule]
})
export class ConfirmationComponent {
  confirmation?: ConfirmationInterface;

  constructor(private confirmService: ConfirmService) {}

  ngOnInit(): void {
    this.confirmService.getConfirm().subscribe((confirm) => {
      this.confirmation = confirm;
    })
  }
 }
