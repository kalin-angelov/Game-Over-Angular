import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from 'src/app/types/game';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit{

  constructor (
    private gameService: GamesService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
  ) { };

  game: Game | undefined;
  gameId = this.activatedRoute.snapshot.params['gameId'];

  ngOnInit(): void {
    
    this.gameService.getGame(this.gameId).subscribe(data => {
      this.game = data;
    })
  }

  editGame( form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const body = {...form.value};

    if (form.valid) {
      this.gameService.editGame(this.gameId, body).subscribe(() => {
        this.router.navigate([`/details/${this.gameId}`]);
      })
    }
  }
}
