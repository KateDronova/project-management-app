import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { backgrounds } from 'src/app/models/backgrounds';
import { Board } from 'src/app/models/board';
import { BoardClass } from 'src/app/models/board-class';

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
      title: this.boardName,
      background: this?.backgroundName,
      description: this?.descriptionName
    });
    this.idCounter++;
    this.boardName = '';
    this.backgroundName = '';
    this.descriptionName = '';
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
