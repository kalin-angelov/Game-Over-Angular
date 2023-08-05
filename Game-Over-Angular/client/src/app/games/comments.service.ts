import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Comment } from '../types/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor( private http: HttpClient) { }

  getAllComments( gameId: string ) {
    const { apiUrl } = environment;
    return this.http.get<Comment[]>(`${apiUrl}/data/${gameId}`);
  }

  getComment( gameId: string, commentId: string) {
    const { apiUrl } = environment;
    return this.http.get<Comment>(`${apiUrl}/data/${gameId}/${commentId}`);
  }

  addComment( gameId: string, body: Comment ) {
    const { apiUrl } = environment;
    return this.http.post<Comment>(`${apiUrl}/data/${gameId}`, body);
  }

  deleteComment( gameId: string, commentId: string) {
    const { apiUrl } = environment;
    return this.http.delete<Comment>(`${apiUrl}/data/${gameId}/${commentId}`);
  }

  editComment(gameId: string ,commentId: string, body: Comment) {
    const { apiUrl } = environment;
    return this.http.put<Comment>(`${apiUrl}/data/${gameId}/${commentId}`, body);
  }
}
