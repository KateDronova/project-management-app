import { Component, Input } from '@angular/core';
import { Column } from '../../models/column';

@Component({
  selector: 'app-columns-list',
  templateUrl: './columns-list.component.html',
  styleUrls: ['./columns-list.component.scss']
})
export class ColumnsListComponent {
  @Input() columnList: Column[] = [];

}
