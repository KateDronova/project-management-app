import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ConfirmService } from '../../../core/services/confirm.service';
import { ConfirmationType } from '../../models/confirmation-type';
import { ConfirmationInterface } from '../../models/confirmation-interface';
// import { Board } from '../../models/board';

@Component({
  selector: 'app-board-route',
  templateUrl: './board-route.component.html',
  styleUrls: ['./board-route.component.scss']
})
export class BoardRouteComponent {
  // board: Board | null = null;

  loaded: boolean = false
  modalVisibility: boolean = false
  columnList: string[] = []
  confirmTypes = ConfirmationType
  confirmation?: ConfirmationInterface

  constructor(private location: Location, private confirmService: ConfirmService) {}

  goBack() {
    this.location.back()
  }

  openModalWindow() {

  }

  appearSmoothly () {
    this.loaded = true
  }

  // onAddColumn(item: string) {
  onAddColumn(item: string) {
    this.columnList.push(item);
    console.log(this.columnList)//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }

}
