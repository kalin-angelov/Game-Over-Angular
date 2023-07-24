import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { EditComponent } from './core/edit/edit.component';
import { CreateComponent } from './core/create/create.component';
import { ErrorComponent } from './core/error/error.component';
import { ProfileComponent } from './core/profile/profile.component';
import { MyGamesComponent } from './core/profile/my-games/my-games.component';
import { CatalogComponent } from './core/catalog/catalog.component';
import { GamesListComponent } from './core/catalog/games-list/games-list.component';
import { GameInfoComponent } from './core/catalog/game-info/game-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    CreateComponent,
    ErrorComponent,
    ProfileComponent,
    MyGamesComponent,
    CatalogComponent,
    GamesListComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
