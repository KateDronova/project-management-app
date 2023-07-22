import { Component, OnInit } from '@angular/core';
import { ConfirmationInterface } from '../../models/confirmation-interface';
import { ConfirmService } from '../../../core/services/confirm.service';
import { BoardsService } from 'src/app/core/services/boards.service';
import { UsersService } from 'src/app/core/services/users.service';
import { Board } from '../../models/board';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  confirmation?: ConfirmationInterface;
  boardList: Board[] = []
  filteredBoardList: Board[] = []

  constructor(private confirmService: ConfirmService, private boardsService: BoardsService,
    private userService: UsersService, private authService: AuthService ) {
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

  onDeleteUser() {
    this.userService.deleteUser().subscribe(() => {
      this.authService.logOut();
    });
    this.closeConfirmation()
  }

  onDeleteBoard() {
    this.boardsService.deleteBoard().subscribe(() => {
      this.getFilteredBoards('');
    });
    this.closeConfirmation()
  }

  onDeleteColumn() {
    this.boardsService.deleteColumn().subscribe(() => { });
    this.closeConfirmation()
  }

  onDeleteTask() {
    this.boardsService.deleteTask().subscribe(() => { });
    this.closeConfirmation()
  }
 }

