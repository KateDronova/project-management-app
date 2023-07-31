import { Component, Input } from '@angular/core';
import { Board } from '../../models/board';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent{
  @Input() boardList: Board[] = [];
  @Input() filteredBoardList: Board[] = [];
}
