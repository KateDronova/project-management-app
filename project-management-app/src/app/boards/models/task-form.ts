export class TaskForm {
  id: number
  taskTitle: string
  taskDescription: string
  background: string
  complete: boolean
  columnId: number

  constructor() {
    this.id = 0;
    this.taskTitle = '';
    this.columnId = 0;
    this.taskDescription = '';
    this.background = '';
    this.complete = false
  }
}
