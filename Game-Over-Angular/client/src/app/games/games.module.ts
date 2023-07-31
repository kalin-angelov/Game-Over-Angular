import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { CreateGameComponent } from './create-game/create-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsGameComponent } from './details-game/details-game.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateGameComponent, EditGameComponent, CatalogComponent, DetailsGameComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule
  ]
})
export class GamesModule { }
