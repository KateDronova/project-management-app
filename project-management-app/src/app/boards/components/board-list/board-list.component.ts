import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Board } from '../../models/board';
import { BoardsService } from 'src/app/core/services/boards.service';


@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent{
  @Input() boardList: Board[] = [];
  @Input() filteredBoardList: Board[] = [];

  constructor() {}

  // private getFilteredBoards(text: string) {
  //   this.boardsService.getFilteredBoards(text).subscribe((filteredBoardList) => {
  //     this.filteredBoardList = filteredBoardList;
  //   })
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.getFilteredBoards('');
  // }
}
