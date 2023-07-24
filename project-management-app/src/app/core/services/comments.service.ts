import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfirmService } from './confirm.service';
import { Comment } from 'src/app/boards/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  commentList: Comment[] = []
  private url = `http://localhost:3000/comments`

  constructor( private httpClient: HttpClient, private confirm: ConfirmService ) { }

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.url)
  }

  addComment(item: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>(this.url, item)
  }

  deleteComment(): Observable<Comment> {
    return this.httpClient.delete<Comment>(`${this.url}/${this.confirm.idToDelete}`)
  }
}
