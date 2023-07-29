import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
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
  // board: Board | null = null;

  loaded: boolean = false
  modalVisibility: boolean = false
  columnList: Column[] = []
  confirmTypes = ConfirmationType
  confirmation?: ConfirmationInterface
  id: number = 0
  boardTitle: string = ''
  background: string = ''
  boardDescription: string = ''

  constructor(private location: Location, private confirmService: ConfirmService,
    private columnService: ColumnsService, private route: ActivatedRoute,
    private boardService: BoardsService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getCurrentBoardInfo(this.id);
    this.getColumnsForSingeBoard(this.id);
    this.confirmService.notifyOfDeletionChanges$.subscribe(() => {
      this.getColumnsForSingeBoard(this.id);
      this.cdr.markForCheck();
    })
  }

  private getCurrentBoardInfo(id: number) {
    this.boardService.getBoardById(id).subscribe((item) => {
      this.id = item.id;
      this.boardTitle = item.boardTitle;
      this.background = item.background;
      this.boardDescription = item.boardDescription;
    })
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
    this.columnService.addColumn(item).subscribe(() => {
      this.getColumnsForSingeBoard(this.id);
    });
  }

  private getColumnsForSingeBoard(boardId: number) {
    this.columnService.getFilteredColumns(boardId).subscribe((columnList) => {
      this.columnList = columnList;
    })
  }

  drop(event: CdkDragDrop<Column[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
  }
}
