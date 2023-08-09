import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './not-found/not-found.component';
import { GlobalLoaderComponent } from './core/global-loader/global-loader.component';
import { SharedModule } from './shared/shared.module';
import { GamesModule } from './games/games.module';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    GlobalLoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    GamesModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
