import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Board } from 'src/app/models/board';


@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnChanges{
  @Input() boardList: Board[] = [];
  @Input() filteredBoardList: Board[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {

  }

}
