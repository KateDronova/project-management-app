import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board';
import { ConfirmService } from 'src/app/services/confirm.service';
import { ConfirmationType } from 'src/app/models/confirmation-type';
import { ConfirmationInterface } from 'src/app/models/confirmation-interface';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit{
  @Input() board: Board | null = null;

  confirmTypes = ConfirmationType;
  confirmation?: ConfirmationInterface;

  constructor(private confirmService: ConfirmService) {}

  showConfirmation(type: ConfirmationType) {
    this.confirmService.setConfirm({
      type
    });
  }
  ngOnInit(): void {

  }

}
