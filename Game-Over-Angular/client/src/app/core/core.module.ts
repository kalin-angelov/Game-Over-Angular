import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { CatalogComponent } from './catalog/catalog.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    CreateComponent,
    ErrorComponent,
    ProfileComponent,
    CatalogComponent,
    GlobalLoaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    CreateComponent,
    ErrorComponent,
    ProfileComponent,
    CatalogComponent,
    GlobalLoaderComponent
  ]
})
export class CoreModule { }
