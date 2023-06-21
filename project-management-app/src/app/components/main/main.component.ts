import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Board } from 'src/app/models/board';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  searchGroup = new FormGroup({
    search: new FormControl("")
  })
  modalVisibility: boolean = false
  boardList: Board[] = []
  loaded: boolean = false

  constructor(private translate: TranslateService) { }

  openModalWindow() {
    this.modalVisibility = true;
  }

  onAddBoard(item: Board) {
    this.boardList.push(item);
    console.log(this.boardList)
  }

  appearSmoothly () {
    this.loaded = true
  }
}
