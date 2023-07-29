import { Component, Input, Output, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { ConfirmService } from '../../../core/services/confirm.service';
import { ConfirmationType } from '../../models/confirmation-type';
import { ConfirmationInterface } from '../../models/confirmation-interface';
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
  editingTask: boolean = false

  taskList: Task[] = []

  confirmTypes = ConfirmationType
  confirmation?: ConfirmationInterface
  userChangedTaskValues: FormValues = {}

  constructor(private confirmService: ConfirmService, private taskService: TasksService,
    private cdr: ChangeDetectorRef) {}

  showConfirmation(type: ConfirmationType, id: number): void {
    this.confirmService.setConfirm({type}, id);
  }

  onToggleComplete(task: Task): void {
    task.complete = !task.complete;
    this.taskService.updateTask(task, task.id).subscribe();
  }

  openModalWindow(): void {
    this.modalVisibility = true;
  }

  appearSmoothly(): void {
    this.loaded = true;
  }

  startEditing(): void {
    this.editingTask = true;
    this.cdr.markForCheck();
  }

  onEditTask(task: Task): void {
    this.taskService.updateTask(task, task.id).subscribe(() => {
      this.getTasksForSingeColumn(this.task.columnId);
      this.cdr.markForCheck();
    });
  }

  private getTasksForSingeColumn(columnId: number): void {
    this.taskService.getFilteredTasks(columnId).subscribe((taskList) => {
      this.taskList = taskList;
    })
  }
}
