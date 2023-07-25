import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { Column } from '../../models/column';

@Component({
  selector: 'app-modal-column',
  templateUrl: './modal-column.component.html',
  styleUrls: ['./modal-column.component.scss']
})
export class ModalColumnComponent {
  @Input() modalVisibility: boolean = true || false;
  @Input() loaded: boolean = true || false;
  @Input() boardId: number = 0;

  @Output() modalVisibilityChange = new EventEmitter<boolean>;
  @Output() loadedChange = new EventEmitter<boolean>;
  @Output() addColumn = new EventEmitter<Column>;


  idCounter = 0
  columnName: string = ''

  onSubmit() {
    this.addColumn.emit({
      id: this.idCounter,
      columnTitle: this.columnName,
      boardId: this.boardId,
    });
    this.idCounter++;
    this.columnName = '';
    this.removeModalWindow()
  }

  removeModalWindow() {
    this.modalVisibilityChange.emit(
      this.modalVisibility = false
    )
    this.loadedChange.emit(
      this.loaded = false
    )
  }
}
