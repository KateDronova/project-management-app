import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BoardsService } from '../../../core/services/boards.service';
import { Board } from '../../models/board';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  searchGroup = new FormGroup({
    search: new FormControl("")
  })
  boardList: Board[] = []
  filteredBoardList: Board[] = []
  modalVisibility: boolean = false
  loaded: boolean = false

  constructor(private translate: TranslateService,
    private boardsService: BoardsService) {
    this.filteredBoardList = this.boardList;
  }

  ngOnInit(): void {
    this.getFilteredBoards('');
  }

  onAddBoard(item: Board) {
    this.boardsService.addBoard(item).subscribe(() => {
      this.getFilteredBoards('');
    });
  }

  onFilterResults(text: string) {
    this.getFilteredBoards(text);
  }

  private getFilteredBoards(text: string) {
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
