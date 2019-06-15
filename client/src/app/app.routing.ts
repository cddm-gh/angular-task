import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import {ArticlesListComponent} from './articles-list/articles-list.component';

const routes: Routes = [
  {path: '', component: ArticlesListComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);