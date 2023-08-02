import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Game } from 'src/app/types/game';
import { GamesService } from 'src/app/games/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor( private userService: UserService, private gamesService: GamesService, private router: Router ) { }

  user = this.userService.getUser()
  userGameList: Game[] = [];

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe(games => {
      games.map(game => {
        game._ownerId === this.user?._id ? this.userGameList.push(game) : ''
      })
    })
  }

  editGame(gameId: string):void {
    this.router.navigate([`/edit/${gameId}`]);
  }

  deleteGame(gameId: string, ownerId: string): void {
    const confirmed = window.confirm('ARE YOU SURE ?');
    if (confirmed && this.user?._id === ownerId) {
      this.gamesService.removeGame(gameId).subscribe(() => {
        this.router.navigate(['/catalog']);
      });
    } else {
      this.router.navigate(['/404']);
    }
  }
}
