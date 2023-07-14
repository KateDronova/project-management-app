export interface Board {
  id: number,
  boardTitle: string,
  background: string,
  boardDescription: string,
  columns?: {
    columnTitle: string,
    tasks: {
      taskTitle: string,
      taskDescription: string,
      assignees: string[],
      comments: string[]
    }[]
  }[]
}
