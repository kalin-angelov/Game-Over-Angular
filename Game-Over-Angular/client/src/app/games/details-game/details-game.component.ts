import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service'
import { Game } from 'src/app/types/game';
import { UserService } from 'src/app/user/user.service';
import { NgForm } from '@angular/forms';
import { CommentsService } from '../comments.service';
import { Comment } from 'src/app/types/comments';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.css']
})
export class DetailsGameComponent implements OnInit{
  game: Game | undefined;
  comment: Comment | undefined;
  commentsList: Comment[] = [];

  gameId = this.activatedRoute.snapshot.params['gameId'];
  userId = this.userService.getUser()?._id;

  showEditComment: boolean = false;

  constructor(
    private gamesService: GamesService, 
    private activatedRoute: ActivatedRoute, 
    private userService: UserService,
    private commentService: CommentsService,
    private router: Router
  ) {}

  createCommentBody( form: NgForm ) {
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const user = this.userService.getUser();
    const fullDate = [ day, month, year].join('-');

    return { 
      user: String(user?.username),
      text: String(form.value.comment),
      createdAt: String(fullDate),
      _createdOn:Number(),
      _id: '',
      _ownerId: ''
    };
  }

  ngOnInit(): void {
    this.fetchGame();
    this.fetchComments();
  }

  get isLoggedIn():boolean {
    return this.userService.isLogged;
  }

  fetchGame(): void {
    this.gamesService.getGame(this.gameId).subscribe(game => {
      this.game = game;
    })
  }

  fetchComments(): void {
    this.commentService.getAllComments(this.gameId).subscribe(data => {
      this.commentsList = data;
    });
  }

  addComment( form: NgForm ): void {
    const body = this.createCommentBody(form);
    this.commentService.addComment(this.gameId, body).subscribe((comment) => {
      this.commentsList = [...this.commentsList, comment];
      form.reset();
    });
  }

  removeComment( commentId: string ):void {
    this.commentService.deleteComment(this.gameId, commentId).subscribe(() => {
      this.commentsList = this.commentsList.filter(comment => comment._id !== commentId);
    });
  }

  editComment(  form: NgForm, commentId: string ): void{
    const body = this.createCommentBody(form);
    this.commentService.editComment(this.gameId, commentId, body).subscribe(updatedComment => {
      this.commentsList = this.commentsList.map((comment) => {
        if (comment._id === commentId) {
          return updatedComment;
        }
        return comment;
      })
      
    });
    this.showEditComment = false;
  }
  
  showEditCommentSection( commentId: string ) {
    this.showEditComment = true;
    this.commentService.getComment(this.gameId, commentId).subscribe(comment => {
      this.comment = comment;
    })
  }

  hideEditCommentSection() {
    this.showEditComment = false;
  }
}
