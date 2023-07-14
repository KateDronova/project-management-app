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

  // filterResults(text: string): void {
  //   if (!text) {
  //     this.filteredBoardList = this.boardList;
  //   }

  //   this.filteredBoardList = this.boardList.filter(
  //     board => board?.description.toLowerCase().includes(text.toLowerCase())
  //     || board?.title.toLowerCase().includes(text.toLowerCase())
  //     || board?.id.toString().includes(text)
  //   );
  // }

  // getBoards(): Board[] {
  //   return this.boardList;
  // }

  // getFilteredBoards(): Board[] {
  //   return this.filteredBoardList;
  // }

  // addBoard(item: Board): void {
  //   this.boardList = [...this.boardList, item];
  // }

}
