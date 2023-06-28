export class BoardClass {
  id: number;
  title: string;
  background: string;
  description?: string;

  constructor() {
    this.id = 0;
    this.title = '';
    this.background = '';
    this.description = ''
   }
}
