import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ConfirmationInterface } from '../../models/confirmation-interface';
import { ConfirmService } from '../../../core/services/confirm.service';
import { BoardsService } from 'src/app/core/services/boards.service';
import { Board } from '../../models/board';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  confirmation?: ConfirmationInterface;
  boardList: Board[] = []
  filteredBoardList: Board[] = []

  constructor(private confirmService: ConfirmService, private boardsService: BoardsService ) {
    this.filteredBoardList = this.boardList;
  }

  ngOnInit(): void {
    this.confirmService.getConfirm().subscribe((confirm) => {
      this.confirmation = confirm;
    })
  }

  closeConfirmation() {
    this.confirmation = undefined
  }

  private getFilteredBoards(text: string) {
    this.boardsService.getFilteredBoards(text).subscribe((filteredBoardList) => {
      this.filteredBoardList = filteredBoardList;
      console.log(this.filteredBoardList);
    })
  }

  onDeleteBoard() {
    // this.boardsService.deleteBoard().
    this.boardsService.deleteBoard().subscribe(() => {
      this.getFilteredBoards('');
    });
    this.closeConfirmation()
  }
 }

