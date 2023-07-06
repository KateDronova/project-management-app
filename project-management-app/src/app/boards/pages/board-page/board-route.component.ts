import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-board-route',
  templateUrl: './board-route.component.html',
  styleUrls: ['./board-route.component.scss']
})
export class BoardRouteComponent {

  loaded: boolean = false
  modalVisibility: boolean = false
  columnList: string[] = []

  constructor(private location: Location) {}

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
