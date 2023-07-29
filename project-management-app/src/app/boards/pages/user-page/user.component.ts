import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor( private boardsService: BoardsService, public route: ActivatedRoute,
    private confirmService: ConfirmService, private cdr: ChangeDetectorRef) {
    this.filteredBoardList = this.boardList
  }

  ngOnInit(): void {
    this.onGetFilteredBoards('');
    this.confirmService.notifyOfDeletionChanges$.subscribe(() => {
      this.onGetFilteredBoards('');
      this.cdr.markForCheck();
    })
  }

  onAddBoard(item: Board) {
    this.boardsService.addBoard(item).subscribe(() => {
      this.onGetFilteredBoards('');
      // console.log(item.id);
      // item.id++;
    });
  }

  onFilterResults(text: string) {
    this.onGetFilteredBoards(text);
  }

  private onGetFilteredBoards(text: string) {
    this.boardsService.getFilteredBoards(text).subscribe((filteredBoardList) => {
      this.filteredBoardList = filteredBoardList;
    })
  }

  openModalWindow() {
    this.modalVisibility = true;
  }

  appearSmoothly () {
    this.loaded = true
  }

  // filterResults(text: string) {
  //   if (!text) {
  //     this.filteredBoardList = this.boardList;
  //   }

  //   this.filteredBoardList = this.boardList.filter(
  //     board => board?.description.toLowerCase().includes(text.toLowerCase())
  //     || board?.title.toLowerCase().includes(text.toLowerCase())
  //     || board?.id.toString().includes(text)
  //   );
  // }
}
