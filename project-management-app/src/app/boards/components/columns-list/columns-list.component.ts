import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-columns-list',
  templateUrl: './columns-list.component.html',
  styleUrls: ['./columns-list.component.scss']
})
export class ColumnsListComponent {
  @Input() columnList: string[] = [];

  loaded: boolean = false
  modalVisibility: boolean = false
  taskList: string[] = []

  openModalWindow() {

  }

  appearSmoothly () {
    this.loaded = true
  }

  // onAddColumn(item: string) {
  onAddTask(item: string) {
    this.taskList.push(item);
    console.log(this.columnList)//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }


}
