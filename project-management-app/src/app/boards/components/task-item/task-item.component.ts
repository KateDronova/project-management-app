import { Component, Input, Output, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { ConfirmService } from '../../../core/services/confirm.service';
import { ConfirmationType } from '../../models/confirmation-type';
import { ConfirmationInterface } from '../../models/confirmation-interface';
import { ColumnsService } from 'src/app/core/services/columns.service';
import { TasksService } from 'src/app/core/services/tasks.service';
import { FormValues } from '../../models/form-values';
import { TaskForm } from '../../models/task-form';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task: Task = {
    id: 0,
    taskTitle: '',
    columnId: 0,
    taskDescription: '',
    background: '',
    complete: false
  }
  @Output() toggleComplete = new EventEmitter();

  columnForm = new TaskForm()
  loaded: boolean = false
  modalVisibility: boolean = false
  taskList: Task[] = []
  confirmTypes = ConfirmationType
  confirmation?: ConfirmationInterface
  editing: boolean = false
  userChangedTaskValues: FormValues = {}

  constructor(private confirmService: ConfirmService, private taskService: TasksService) {}

  showConfirmation(type: ConfirmationType, id: number) {
    this.confirmService.setConfirm({type}, id);
  }

  onToggleComplete(task: Task) {
    task.complete = !task.complete;
    this.taskService.updateTask(task, task.id).subscribe();
  }
}
