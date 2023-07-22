import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../../boards/models/board';
import { Observable } from 'rxjs';
import { ConfirmService } from './confirm.service';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {
  boardList: Board[] = []
  filteredBoardList: Board[] = []
  private url = `http://localhost:3000/boards`

  constructor( private httpClient: HttpClient, private confirm: ConfirmService ) {
    this.filteredBoardList = this.boardList;
  }

  getFilteredBoards(text: string): Observable<Board[]> {
    return this.httpClient.get<Board[]>(`${this.url}?q=${text}`)
  }

  addBoard(item: Board): Observable<Board> {
    return this.httpClient.post<Board>(this.url, item)
  }

  deleteBoard(): Observable<Board> {
    return this.httpClient.delete<Board>(`${this.url}/${this.confirm.idToDelete}`)
  }

  deleteColumn(): Observable<Board> {
    return this.httpClient.delete<Board>(`${this.url}/${this.confirm.idToDelete}.column`)
  }

  deleteTask(): Observable<Board> {
    return this.httpClient.delete<Board>(`${this.url}/${this.confirm.idToDelete}.column.task`)
  }

}
