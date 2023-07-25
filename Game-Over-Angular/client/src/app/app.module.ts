import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { GlobalLoaderComponent } from './core/global-loader/global-loader.component';
import { SharedModule } from './shared/shared.module';


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
    GlobalLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
