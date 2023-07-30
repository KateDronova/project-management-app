import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BoardsService } from '../../../core/services/boards.service';
import { Board } from '../../models/board';
import { ConfirmService } from 'src/app/core/services/confirm.service';


@Component({
  selector: 'app-main',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  searchGroup = new FormGroup({
    search: new FormControl("")
  })
  boardList: Board[] = []
  filteredBoardList: Board[] = []
  modalVisibility: boolean = false
  loaded: boolean = false
  subscriptions: Subscription[] = []

  constructor( private boardsService: BoardsService, public route: ActivatedRoute,
    private confirmService: ConfirmService, private cdr: ChangeDetectorRef) {
    this.filteredBoardList = this.boardList
  }

  ngOnInit(): void {
    this.onGetFilteredBoards('');
    const observable1 = this.confirmService.notifyOfDeletionChanges$;
    const subscription1 = observable1.subscribe(() => {
      this.onGetFilteredBoards('');
      this.cdr.markForCheck();
    })
    this.subscriptions.push(subscription1);
  }

  onAddBoard(item: Board) {
    const observable2 = this.boardsService.addBoard(item);
    const subscription2 = observable2.subscribe(() => {
      this.onGetFilteredBoards('');
    });
    this.subscriptions.push(subscription2);
  }

  onFilterResults(text: string) {
    this.onGetFilteredBoards(text);
  }

  private onGetFilteredBoards(text: string) {
    const observable3 = this.boardsService.getFilteredBoards(text);
    const subscription3 = observable3.subscribe((filteredBoardList) => {
      this.filteredBoardList = filteredBoardList;
    })
    this.subscriptions.push(subscription3);
  }

  openModalWindow() {
    this.modalVisibility = true;
  }

  appearSmoothly () {
    this.loaded = true
  }
}
