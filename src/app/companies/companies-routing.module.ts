import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CompaniesComponent} from './companies/companies.component';

const routes: Routes = [

  // by default, go to companies
  {path: '', pathMatch: 'full', redirectTo: 'companies'},

  // 'eager load' or load right away the companies component
  {path: 'companies', component: CompaniesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
