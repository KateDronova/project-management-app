import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task';
import { backgrounds2 } from '../../models/backgrounds2';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss']
})
export class ModalTaskComponent {
  @Input() modalVisibility: boolean = true || false;
  @Input() loaded: boolean = true || false;
  @Input() columnId: number = 0;

  @Output() modalVisibilityChange = new EventEmitter<boolean>;
  @Output() loadedChange = new EventEmitter<boolean>;
  @Output() addTask = new EventEmitter<Task>;


  idCounter = 0
  taskName: string = ''
  descriptionName: string = ''
  backgroundName: string = ''
  taskComplete: boolean = false

  backgrounds = [...backgrounds2]
  selectedBack?: string

  constructor() {}

  onChooseBack(back: string): void {
    this.selectedBack = back;
  }

  onSubmit() {
    this.addTask.emit({
      id: this.idCounter,
      taskTitle: this.taskName,
      taskDescription: this.descriptionName,
      background: this.backgroundName,
      complete: this.taskComplete,
      columnId: this.columnId,
    });
    this.idCounter++;
    this.taskName = '';
    this.descriptionName = '';
    this.backgroundName = '';
    this.selectedBack = '';
    this.removeModalWindow()
  }

  removeModalWindow() {
    this.modalVisibilityChange.emit(
      this.modalVisibility = false
    )
    this.loadedChange.emit(
      this.loaded = false
    )
  }
}
