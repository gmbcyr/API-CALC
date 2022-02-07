import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalcalcComponent } from './salcalc/salcalc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalcalcDetailComponent } from './salcalc-detail/salcalc-detail.component';
import {HeroesComponent} from './heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SalcalcDetailComponent },
  { path: 'salcalc', component: SalcalcComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
