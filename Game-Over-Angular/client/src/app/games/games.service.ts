import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../types/game';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor( private http: HttpClient ) { }

  getAllGames() {
    const { apiUrl } = environment;
    return this.http.get<Game[]>(`${apiUrl}/data/games`);
  }

  getGame(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Game>(`${apiUrl}/data/games/${id}`);
  }

  addGame(body: Game) {
    const { apiUrl } = environment;
    return this.http.post<Game>(`${apiUrl}/data/games`, body);
  }

  removeGame(gameId: string) {
    const { apiUrl } = environment; 
    return this.http.delete<Game>(`${apiUrl}/data/games/${gameId}`);
  }

  editGame(gameId: string, body: Game) {
    const { apiUrl } = environment; 
    return this.http.put<Game>(`${apiUrl}/data/games/${gameId}`, body);
  }
}
