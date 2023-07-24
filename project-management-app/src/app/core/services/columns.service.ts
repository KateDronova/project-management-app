import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfirmService } from './confirm.service';
import { Column } from 'src/app/boards/models/column';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {
  columnList: Column[] = []
  private url = `http://localhost:3000/columns`

  constructor( private httpClient: HttpClient, private confirm: ConfirmService ) { }

  getColumns(): Observable<Column[]> {
    return this.httpClient.get<Column[]>(this.url)
  }

  addColumn(item: Column): Observable<Column> {
    return this.httpClient.post<Column>(this.url, item)
  }

  deleteColumn(): Observable<Column> {
    return this.httpClient.delete<Column>(`${this.url}/${this.confirm.idToDelete}`)
  }
}
