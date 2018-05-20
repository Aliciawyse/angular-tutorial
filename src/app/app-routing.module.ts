import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PathNotFoundComponent} from './path-not-found/path-not-found.component';

const routes: Routes = [

  // by default, go to home
  {path: '', pathMatch: 'full', redirectTo: 'home'},

  // 'eager load' or load right away the home component
  {path: 'home', component: HomeComponent},

  // 'lazy load' companies component
  {path: 'companies', loadChildren: 'app/companies/companies.module#ComapniesModule'},

  // our 404 page
  {path: '**', pathMatch: 'full', component: PathNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
