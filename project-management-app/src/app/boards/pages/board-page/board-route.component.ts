import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ConfirmService } from '../../../core/services/confirm.service';
import { ConfirmationType } from '../../models/confirmation-type';
import { ConfirmationInterface } from '../../models/confirmation-interface';
import { BoardsService } from 'src/app/core/services/boards.service';
import { ColumnsService } from 'src/app/core/services/columns.service';
import { Column } from 'src/app/boards/models/column';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-board-route',
  templateUrl: './board-route.component.html',
  styleUrls: ['./board-route.component.scss']
})
export class BoardRouteComponent implements OnInit {
  // board: Board | null = null;

  loaded: boolean = false
  modalVisibility: boolean = false
  columnList: string[] = []
  confirmTypes = ConfirmationType
  confirmation?: ConfirmationInterface
  id: number = 0
  boardTitle: string = ''
  background: string = ''
  boardDescription: string = ''
  boardId: number = this.id

  constructor(private location: Location, private confirmService: ConfirmService,
    private columnService: ColumnsService, private route: ActivatedRoute,
    private boardService: BoardsService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getCurrentBoardInfo(this.id);
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
    this.columnService.addColumn(item).subscribe(() => {});
    console.log(this.columnList)
  }
}
