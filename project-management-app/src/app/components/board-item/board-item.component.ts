import { Component, Input } from '@angular/core';
import { Board } from 'src/app/models/board';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent {

  @Input() board: Board | null = null;

}
