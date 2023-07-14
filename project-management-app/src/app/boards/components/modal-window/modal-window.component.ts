import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { backgrounds } from '../../models/backgrounds';
import { Board } from '../../models/board';
import { BoardClass } from '../../models/board-class';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  @Input() modalVisibility: boolean = true || false;
  @Input() loaded: boolean = true || false;

  @Output() modalVisibilityChange = new EventEmitter<boolean>;
  @Output() loadedChange = new EventEmitter<boolean>;
  @Output() addBoard = new EventEmitter<Board>;

  boardForm = new BoardClass();

  idCounter = 0
  boardName: string = ''
  backgroundName: string = ''
  descriptionName: string = ''

  backgrounds = [...backgrounds]

  selectedBack?: string

  constructor(private transtate: TranslateService) {}

  onSubmit() {
    this.addBoard.emit({
      id: this.idCounter,
      boardTitle: this.boardName,
      background: this?.backgroundName,
      boardDescription: this?.descriptionName
    });
    this.idCounter++;
    this.boardName = '';
    this.backgroundName = '';
    this.descriptionName = '';
    this.selectedBack = '';
    this.removeModalWindow()
  }

  onChooseBack(back: string): void {
    this.selectedBack = back;
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
