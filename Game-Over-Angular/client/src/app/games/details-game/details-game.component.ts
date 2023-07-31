import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Game } from 'src/app/types/game';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.css']
})
export class DetailsGameComponent implements OnInit{
  game: Game | undefined;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchGame();
  }

  fetchGame(): void {
    const id = this.activatedRoute.snapshot.params['gameId'];

    this.apiService.getGame(id).subscribe(game => {
      this.game = game;
      console.log(this.game);
      
    })
  }
}