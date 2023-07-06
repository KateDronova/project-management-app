import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Board } from '../../models/board';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  searchGroup = new FormGroup({
    search: new FormControl("")
  })
  boardList: Board[] = []
  filteredBoardList: Board[] = []
  modalVisibility: boolean = false
  loaded: boolean = false

  constructor(private translate: TranslateService) {
    this.filteredBoardList = this.boardList;
  }

  openModalWindow() {
    this.modalVisibility = true;
  }

  onAddBoard(item: Board) {
    this.boardList.push(item);
    console.log(this.boardList)//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }

  appearSmoothly () {
    this.loaded = true
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredBoardList = this.boardList;
    }

    this.filteredBoardList = this.boardList.filter(
      board => board?.description.toLowerCase().includes(text.toLowerCase())
      || board?.title.toLowerCase().includes(text.toLowerCase())
      || board?.id.toString().includes(text)
    );
  }
}
