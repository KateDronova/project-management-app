import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  @Input() taskList: Task[] = [];

}
