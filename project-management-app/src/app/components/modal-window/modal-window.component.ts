import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';

import { backgrounds } from 'src/app/models/backgrounds';
// import { Background } from 'src/app/models/backgrounds';
import { Board } from 'src/app/models/board';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {

  boardForm = new FormGroup({
    'title': new FormControl("", Validators.required),
    'background': new FormControl("")
  })
  // checked: boolean = false;
  backgrounds = [...backgrounds];
  idCounter = 0
  boardName = ''
  background = ''

  // modal = <HTMLElement>document.querySelector('.modal')
  selectedBack?: string

  // modalVisibility: boolean = true || false;
  @Input() modalVisibility: boolean = true || false;
  @Output() addBoard = new EventEmitter<Board>;
  @Output() modalVisibilityChange = new EventEmitter<boolean>;

  constructor(private transtate: TranslateService) {}

  get title(): any {
    return this.boardName
  }

  onChooseBack(back: string): void {
    this.selectedBack = back;
  }

  removeModalWindow() {
    this.modalVisibilityChange.emit(
      this.modalVisibility = false
    )
    console.log(this.modalVisibility)
  }

  onSubmit() {
    this.addBoard.emit({
      id: this.idCounter,
      title: this.boardName,
      background: this.background
    });
    this.idCounter++;
    this.boardName = '';
    this.background = ''
  }
}
