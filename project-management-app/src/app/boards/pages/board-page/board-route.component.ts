import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { Subscription } from 'rxjs';
import { ConfirmService } from '../../../core/services/confirm.service';
import { ConfirmationType } from '../../models/confirmation-type';
import { ConfirmationInterface } from '../../models/confirmation-interface';
import { BoardsService } from 'src/app/core/services/boards.service';
import { ColumnsService } from 'src/app/core/services/columns.service';
import { Column } from 'src/app/boards/models/column';

@Component({
  selector: 'app-board-route',
  templateUrl: './board-route.component.html',
  styleUrls: ['./board-route.component.scss']
})
export class BoardRouteComponent implements OnInit {
  loaded: boolean = false
  modalVisibility: boolean = false
  columnList: Column[] = []
  confirmTypes = ConfirmationType
  confirmation?: ConfirmationInterface
  id: number = 0
  boardTitle: string = ''
  background: string = ''
  boardDescription: string = ''
  subscriptions: Subscription[] = []

  constructor(private location: Location, private confirmService: ConfirmService,
    private columnService: ColumnsService, private route: ActivatedRoute,
    private boardService: BoardsService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const observable1 = this.route.params;
    const subscription1 = observable1.subscribe(params => {
      this.id = +params['id'];
    });
    this.getCurrentBoardInfo(this.id);
    this.getColumnsForSingeBoard(this.id);
    const observable2 = this.confirmService.notifyOfDeletionChanges$;
    const subscription2 = observable2.subscribe(() => {
      this.getColumnsForSingeBoard(this.id);
      this.cdr.markForCheck();
    })
    this.subscriptions.push(subscription1, subscription2);
  }

  private getCurrentBoardInfo(id: number) {
    const observable3 = this.boardService.getBoardById(id);
    const subscription3 = observable3.subscribe((item) => {
      this.id = item.id;
      this.boardTitle = item.boardTitle;
      this.background = item.background;
      this.boardDescription = item.boardDescription;
    })
    this.subscriptions.push(subscription3);
  }

  goBack() {
    this.location.back()
  }

  openModalWindow() {
    this.modalVisibility = true;
  }

  appearSmoothly () {
    this.loaded = true
  }

  onAddColumn(item: Column) {
    const observable4 = this.columnService.addColumn(item);
    const subscription4 = observable4.subscribe(() => {
      this.getColumnsForSingeBoard(this.id);
    });
    this.subscriptions.push(subscription4);
  }

  private getColumnsForSingeBoard(boardId: number) {
    const observable5 = this.columnService.getFilteredColumns(boardId);
    const subscription5 = observable5.subscribe((columnList) => {
      this.columnList = columnList;
    })
    this.subscriptions.push(subscription5);
  }

  drop(event: CdkDragDrop<Column[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
  }
}
