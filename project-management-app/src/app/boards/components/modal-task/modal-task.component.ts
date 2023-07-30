import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { TasksService } from 'src/app/core/services/tasks.service';
import { Task } from '../../models/task';
import { backgrounds2 } from '../../models/backgrounds2';
import { TaskForm } from '../../models/task-form';
import { FormValues } from '../../models/form-values';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss']
})
export class ModalTaskComponent implements OnInit {
  @Input() modalVisibility: boolean = true || false;
  @Input() loaded: boolean = true || false;
  @Input() editingTask: boolean = false;
  @Input() id: number = 0;
  @Input() task: Task = {
    id: 0,
    taskTitle: '',
    taskDescription: '',
    background: '',
    complete: false,
    columnId: 0
  };

  @Output() modalVisibilityChange = new EventEmitter<boolean>;
  @Output() loadedChange = new EventEmitter<boolean>;
  @Output() editingTaskChange = new EventEmitter<boolean>;
  @Output() taskChange = new EventEmitter<boolean>;
  @Output() addTask = new EventEmitter<Task>;
  @Output() emitTask = new EventEmitter<Task>;

  taskForm = new TaskForm()
  randomBackground: string = ['sky-blue', 'dark-blue', 'sand', 'green', 'pale', 'berry'][
    Math.floor(Math.random() * 6)
  ]
  idCounter = 0
  taskName: string = ''
  descriptionName: string = ''
  backgroundName: string = this.randomBackground
  taskComplete: boolean = false

  backgrounds2 = [...backgrounds2]
  selectedBack: string = ''

  currentTask: Task = {
    id: 0,
    taskTitle: '',
    taskDescription: '',
    background: '',
    complete: false,
    columnId: 0
  }
  userChangedColumnValues: FormValues = {}
  subscriptions: Subscription[] = []

  constructor(private taskService: TasksService,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.onGetCurrentTask(this.id);
  }

  onAddTask(): void {
    this.addTask.emit({
      id: this.idCounter,
      taskTitle: this.taskName,
      taskDescription: this.descriptionName,
      background: this.backgroundName,
      complete: this.taskComplete,
      columnId: this.id,
    });
    this.idCounter++;
    this.taskName = '';
    this.descriptionName = '';
    this.backgroundName = this.randomBackground;
    this.selectedBack = '';
    this.removeModalWindow();
  }

  onEditTask(taskId: number): void {
    const finalFormValues = Object.assign({}, this.currentTask, this.userChangedColumnValues);
    const observable1 = this.taskService.updateTask(finalFormValues, taskId);
    const subscription1 = observable1.subscribe();
    console.log(finalFormValues);
    this.cdr.markForCheck();
    this.removeModalWindow();
    this.onGetCurrentTask(taskId);
    this.cdr.markForCheck();
    this.emitTask.emit({
      id: this.currentTask.id,
      taskTitle: this.currentTask.taskTitle,
      taskDescription: this.currentTask.taskDescription,
      background: this.currentTask.taskDescription,
      complete: this.currentTask.complete,
      columnId: this.currentTask.columnId,
    });
    this.task.taskTitle = this.currentTask.taskTitle;
    this.task.taskDescription = this.currentTask.taskDescription;
    this.subscriptions.push(subscription1);
  }

  private onGetCurrentTask(taskId: number): void {
    const observable2 = this.taskService.getCurrentTask(taskId);
    const subscription2 = observable2.subscribe((currentTask) => {
      this.currentTask = currentTask;
    });
    this.subscriptions.push(subscription2);
  }

  trackChanges(fieldName: string, value: string): void {
    if (value !== this.taskName) {
      this.userChangedColumnValues[fieldName] = value;
    }
  }

  onChooseBack(back: string): void {
    this.selectedBack = back;
  }

  removeModalWindow() {
    this.modalVisibilityChange.emit(
      this.modalVisibility = false
    )
    this.loadedChange.emit(
      this.loaded = false
    )
    this.editingTaskChange.emit(
      this.editingTask = false
    )
  }
}
