import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Game } from './types/game';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  getAllGames() {
    const { appUrl } = environment;
    return this.http.get<Game[]>(`${appUrl}`);
  }

  getGame(id: string) {
    const { appUrl } = environment;
    return this.http.get<Game>(`${appUrl}/${id}`);
  }
}
