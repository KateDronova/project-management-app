import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfirmationInterface } from '../../models/confirmation-interface';
import { ConfirmService } from '../../../core/services/confirm.service';
import { BoardsService } from 'src/app/core/services/boards.service';
import { UsersService } from 'src/app/core/services/users.service';
import { Board } from '../../models/board';
import { AuthService } from 'src/app/core/services/auth.service';
import { ColumnsService } from 'src/app/core/services/columns.service';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit, OnDestroy {
  confirmation?: ConfirmationInterface;
  boardList: Board[] = []
  filteredBoardList: Board[] = []
  subscriptions: Subscription[] = []

  constructor(private confirmService: ConfirmService, private boardsService: BoardsService,
    private userService: UsersService, private authService: AuthService, private cdr: ChangeDetectorRef,
    private columnService: ColumnsService, private taskService: TasksService ) {
    this.filteredBoardList = this.boardList;
  }

  ngOnInit(): void {
    const observable1 = this.confirmService.getConfirm();
    const subscription1 = observable1.subscribe((confirm) => {
      this.confirmation = confirm;
    });
    this.subscriptions.push(subscription1);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  closeConfirmation(): void {
    this.confirmation = undefined
  }

  private getFilteredBoards(text: string): void {
    const observable2 = this.boardsService.getFilteredBoards(text);
    const subscription2 = observable2.subscribe((filteredBoardList) => {
      this.filteredBoardList = filteredBoardList;
    })
    this.subscriptions.push(subscription2);
  }

  onDeleteUser(): void {
    const observable3 = this.userService.deleteUser();
    const subscription3 = observable3.subscribe(() => {
      this.authService.logOut();
    });
    this.closeConfirmation();
    this.subscriptions.push(subscription3);
  }

  onDeleteBoard(): void {
    const observable4 = this.boardsService.deleteBoard();
    const subscription4 = observable4.subscribe(() => {
      this.confirmService.triggerItemListChange();
      this.getFilteredBoards('');
    });
    this.closeConfirmation();
    this.subscriptions.push(subscription4);
  }

  onDeleteColumn(): void {
    const observable5 = this.columnService.deleteColumn();
    const subscription5 = observable5.subscribe(() => {
      this.confirmService.triggerItemListChange();
      this.columnService.getColumns();
    });
    this.closeConfirmation()
    this.subscriptions.push(subscription5);
  }

  onDeleteTask(): void {
    const observable6 = this.taskService.deleteTask();
    const subscription6 = observable6.subscribe(() => {
      this.confirmService.triggerItemListChange();
    });
    this.closeConfirmation();
    this.subscriptions.push(subscription6);
  }
 }

