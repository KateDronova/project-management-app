import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  getFilteredColumns(boardId: number): Observable<Column[]> {
    return this.httpClient.get<Column[]>(`${this.url}?boardId=${boardId}`)
  }

  getColumnTitle(columnId: number): Observable<string> {
    return this.httpClient.get<Column>(`${this.url}/${columnId}`).pipe(
      map(column => column.columnTitle)
    );
  }

  addColumn(item: Column): Observable<Column> {
    return this.httpClient.post<Column>(this.url, item)
  }

  updateColumn(item: Column, id: number): Observable<Column> {
    return this.httpClient.put<Column>(`${this.url}/${id}`, item)
  }

  deleteColumn(): Observable<Column> {
    return this.httpClient.delete<Column>(`${this.url}/${this.confirm.idToDelete}`)
  }
}
