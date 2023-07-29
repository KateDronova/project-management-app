import { Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-columns-item',
  templateUrl: './columns-item.component.html',
  styleUrls: ['./columns-item.component.scss']
})
export class ColumnsItemComponent implements OnInit {
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


  constructor(private confirmService: ConfirmService, private columnService: ColumnsService,
    private cdr: ChangeDetectorRef, private taskService: TasksService) {}


  ngOnInit(): void {
    this.getTasksForSingeColumn(this.column.id);
    this.confirmService.notifyOfDeletionChanges$.subscribe(() => {
      this.getTasksForSingeColumn(this.column.id);
      this.cdr.markForCheck();
    })
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
    this.taskService.addTask(task).subscribe(() => {
      this.getTasksForSingeColumn(this.column.id);
    });
  }

  onSave(id: number): void {
    const finalFormValues = Object.assign({}, this.column, this.userChangedColumnValues);
    this.columnService.updateColumn(finalFormValues, id).subscribe();
    this.cdr.markForCheck();
    this.endEditing();
    this.column.columnTitle = this.columnName;
    this.cdr.markForCheck();
  }

  private getTasksForSingeColumn(columnId: number): void {
    this.taskService.getFilteredTasks(columnId).subscribe((taskList) => {
      this.taskList = taskList;
    })
  }

  private onGetColumnTitle(columnId: number): void {
    this.columnService.getColumnTitle(columnId).subscribe((columnName) => {
      this.columnName = columnName;
    });
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
