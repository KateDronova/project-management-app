import { Component, Input, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'
import { Column } from '../../models/column';
import { ColumnForm } from '../../models/column-form';
import { Task } from '../../models/task';
import { ConfirmService } from '../../../core/services/confirm.service';
import { ConfirmationType } from '../../models/confirmation-type';
import { ConfirmationInterface } from '../../models/confirmation-interface';
import { ColumnsService } from 'src/app/core/services/columns.service';
import { TasksService } from 'src/app/core/services/tasks.service';
import { FormValues } from '../../models/form-values';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-columns-item',
  templateUrl: './columns-item.component.html',
  styleUrls: ['./columns-item.component.scss']
})
export class ColumnsItemComponent implements OnInit, OnDestroy {
  @Input() column: Column = {
    id: 0,
    columnTitle: '',
    boardId: 0
  }
  columnName: string = ''
  columnForm = new ColumnForm()
  loaded: boolean = false
  modalVisibility: boolean = false
  taskList: Task[] = []
  confirmTypes = ConfirmationType
  confirmation?: ConfirmationInterface
  editing: boolean = false
  userChangedColumnValues: FormValues = {}
  subscriptions: Subscription[] = [];


  constructor(private confirmService: ConfirmService, private columnService: ColumnsService,
    private cdr: ChangeDetectorRef, private taskService: TasksService) {}


  ngOnInit(): void {
    this.getTasksForSingeColumn(this.column.id);
    const observable1 = this.confirmService.notifyOfDeletionChanges$;
    const subscription1 = observable1.subscribe(() => {
      this.getTasksForSingeColumn(this.column.id);
      this.cdr.markForCheck();
    })
    this.subscriptions.push(subscription1);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  trackChanges(fieldName: string, value: string): void {
    if (value !== this.column.columnTitle) {
      this.userChangedColumnValues[fieldName] = value;
    }
  }

  showConfirmation(type: ConfirmationType, id: number): void {
    this.confirmService.setConfirm({type}, id);
  }

  openModalWindow(): void {
    this.modalVisibility = true;
  }

  appearSmoothly(): void {
    this.loaded = true
  }

  onAddTask(task: Task): void {
    const observable2 = this.taskService.addTask(task);
    const subscription2 = observable2.subscribe(() => {
      this.getTasksForSingeColumn(this.column.id);
    });
    this.subscriptions.push(subscription2);
  }

  onSave(id: number): void {
    const finalFormValues = Object.assign({}, this.column, this.userChangedColumnValues);
    const observable3 = this.columnService.updateColumn(finalFormValues, id);
    const subscription3 = observable3.subscribe();
    this.cdr.markForCheck();
    this.endEditing();
    this.column.columnTitle = this.columnName;
    this.cdr.markForCheck();
    this.subscriptions.push(subscription3);
  }

  private getTasksForSingeColumn(columnId: number): void {
    const observable4 = this.taskService.getFilteredTasks(columnId);
    const subscription4 = observable4.subscribe((taskList) => {
      this.taskList = taskList;
    })
    this.subscriptions.push(subscription4);
  }

  private onGetColumnTitle(columnId: number): void {
    const observable5 = this.columnService.getColumnTitle(columnId);
    const subscription5 = observable5.subscribe((columnName) => {
      this.columnName = columnName;
    });
    this.subscriptions.push(subscription5);
  }

  startEditing() {
    this.editing = true;
    this.onGetColumnTitle(this.column.id);
    this.cdr.markForCheck();
  }

  endEditing() {
    this.editing = false;
    this.onGetColumnTitle(this.column.id);
    this.cdr.markForCheck();
  }

  drop(event: CdkDragDrop<Column[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
  }
}
