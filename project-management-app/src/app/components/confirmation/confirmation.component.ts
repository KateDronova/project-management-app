import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ConfirmationInterface } from 'src/app/models/confirmation-interface';
import { ConfirmService } from 'src/app/services/confirm.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  confirmation?: ConfirmationInterface;

  constructor(private confirmService: ConfirmService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.confirmService.getConfirm().subscribe((confirm) => {
      this.confirmation = confirm;
    })
  }

  closeConfirmation() {
    this.confirmation = undefined
  }

  deleteBoard() {
    const boardToDelete = this.elementRef.nativeElement;
    // board of filteredBoardList
    this.closeConfirmation()
  }
 }
