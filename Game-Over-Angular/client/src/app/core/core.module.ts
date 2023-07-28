import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from '../not-found/not-found.component';
import { CatalogComponent } from '../games/catalog/catalog.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotfoundComponent,
    CatalogComponent,
    GlobalLoaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    CatalogComponent,
    GlobalLoaderComponent
  ]
})
export class CoreModule { }
