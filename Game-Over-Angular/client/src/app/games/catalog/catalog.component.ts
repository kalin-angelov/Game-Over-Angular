import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';
import { GlobalLoaderService } from '../../core/global-loader/global-loader.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  gamesList: Game[] = [];
  constructor( private apiService: ApiService ) {}

  ngOnInit(): void {
    this.apiService.getAllGames().subscribe(games => {
      this.gamesList = games;
    });
  };
}
