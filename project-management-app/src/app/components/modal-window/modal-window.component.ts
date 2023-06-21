import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';

import { backgrounds } from 'src/app/models/backgrounds';
import { Board } from 'src/app/models/board';

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

  backgrounds = [...backgrounds];
  idCounter = 0
  boardName = ''
  background = ''
  description = ''

  boardForm = new FormGroup({
    background: new FormControl(""),
    title: new FormControl("", Validators.required),
    description: new FormControl("")
  })

  selectedBack?: string

  constructor(private transtate: TranslateService) {}

  get title() { return this.boardForm.get('title');}

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

  onSubmit() {
    this.addBoard.emit({
      id: this.idCounter,
      title: this.boardName,
      background: this.background,
      description: this.description
    });
    console.log(this.title?.value);
    console.log(this.background);
    this.idCounter++;
    this.boardName = '';
    this.background = '';
    this.description = '';
    this.removeModalWindow()
  }
}
