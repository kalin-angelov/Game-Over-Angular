import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from 'src/app/types/game';
import { GlobalLoaderService } from '../../core/global-loader/global-loader.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  gamesList: Game[] = [];
  constructor( private gamesService: GamesService ) {}

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe(games => {
      this.gamesList = games;
    });
  };
}
