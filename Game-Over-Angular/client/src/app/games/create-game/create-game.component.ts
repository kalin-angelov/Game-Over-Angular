import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-create',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent {

  constructor (private gamesService: GamesService, private router: Router ) { };


  addGame( form: NgForm):void {
    if (form.invalid) {
      return
    }
    const gameBody = {...form.value};

    if (form.valid) {
      this.gamesService.addGame(gameBody).subscribe(() => {
        this.router.navigate(['/profile'])
      });
    } 
  }
}
