import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CatalogComponent } from './core/catalog/catalog.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { ErrorComponent } from './core/error/error.component';
import { ProfileComponent } from './core/profile/profile.component';
import { CreateComponent } from './core/create/create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login/register', component: RegisterComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'register/login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/create', component: CreateComponent},
  { path: '404', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
