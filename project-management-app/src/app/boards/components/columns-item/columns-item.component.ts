import { Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';
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


  ngOnInit() {
    this.getTasksForSingeColumn(this.column.id);
  }

  trackChanges(fieldName: string, value: string): void {
    if (value !== this.column.columnTitle) {
      this.userChangedColumnValues[fieldName] = value;
    }
  }

  showConfirmation(type: ConfirmationType, id: number) {
    this.confirmService.setConfirm({type}, id);
  }

  openModalWindow() {
    this.modalVisibility = true;
  }

  appearSmoothly () {
    this.loaded = true
  }

  onAddTask(item: Task) {
    this.taskService.addTask(item).subscribe(() => {
      this.getTasksForSingeColumn(this.column.id);
      console.log(this.column.id);
    });
  }

  private getTasksForSingeColumn(columnId: number) {
    this.taskService.getFilteredTasks(columnId).subscribe((taskList) => {
      this.taskList = taskList;
    })
  }

  onSave(id: number) {
    const finalFormValues = Object.assign({}, this.column, this.userChangedColumnValues);
    this.columnService.updateColumn(finalFormValues, id).subscribe();
    this.cdr.markForCheck();
    console.log('finalFormValues: ', finalFormValues);
    this.endEditing();
    this.cdr.markForCheck();
  }

  startEditing() {
    this.editing = true;
  }

  endEditing() {
    this.editing = false;
  }
}
