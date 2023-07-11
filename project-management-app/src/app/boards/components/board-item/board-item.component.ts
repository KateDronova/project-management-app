import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../../models/board';
import { ConfirmService } from '../../../core/services/confirm.service';
import { ConfirmationType } from '../../models/confirmation-type';
import { ConfirmationInterface } from '../../models/confirmation-interface';

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

  showConfirmation(type: ConfirmationType, id: number) {
    this.confirmService.setConfirm({type}, id);
  }
  ngOnInit(): void {

  }

}
