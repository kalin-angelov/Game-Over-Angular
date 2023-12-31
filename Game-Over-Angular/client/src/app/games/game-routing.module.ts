import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthActivate } from '../core/guards/auth.activate';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsGameComponent } from './details-game/details-game.component'
import { EditGameComponent } from './edit-game/edit-game.component';
import { CreateGameComponent } from './create-game/create-game.component';

const routes: Routes = [
    { 
        path: 'catalog',
        component: CatalogComponent,
    },
    { 
        path: 'details/:gameId',
        component: DetailsGameComponent
    },
    { 
        path: 'edit/:gameId', 
        component: EditGameComponent, 
        canActivate: [AuthActivate] 
    },
    {
        path: 'create',
        component: CreateGameComponent,
        canActivate: [AuthActivate]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GameRoutingModule { }
