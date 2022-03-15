import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EvalSalFormComponent } from './components/eval-sal-form/eval-sal-form.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },

];

@NgModule({

  imports: [RouterModule.forRoot(routes),FormsModule,CommonModule,
    ReactiveFormsModule],
  exports: [RouterModule,FormsModule,
    ReactiveFormsModule]
})
export class AppRoutingModule { }
