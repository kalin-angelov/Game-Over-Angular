import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { NotfoundComponent } from './not-found/not-found.component';
import { CatalogComponent } from './catalog/catalog.component';
import { GlobalLoaderComponent } from './core/global-loader/global-loader.component';
import { SharedModule } from './shared/shared.module';
import { UserRoutingModule } from './user/user-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EditComponent,
    CreateComponent,
    NotfoundComponent,
    CatalogComponent,
    GlobalLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
