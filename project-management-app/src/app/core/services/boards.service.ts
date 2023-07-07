import { Injectable } from '@angular/core';
import { Board } from '../../boards/models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  boardList: Board[] = []
  filteredBoardList: Board[] = []

  constructor() {
    this.filteredBoardList = this.boardList;
  }

  addBoard(item: Board): void {
    this.boardList = [...this.boardList, item];
  }

  filterResults(text: string): void {
    if (!text) {
      this.filteredBoardList = this.boardList;
    }

    this.filteredBoardList = this.boardList.filter(
      board => board?.description.toLowerCase().includes(text.toLowerCase())
      || board?.title.toLowerCase().includes(text.toLowerCase())
      || board?.id.toString().includes(text)
    );
  }

  getBoards(): Board[] {
    return this.boardList;
  }

  getFilteredBoards(): Board[] {
    return this.filteredBoardList;
  }
}
