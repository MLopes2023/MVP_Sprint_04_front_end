import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChurnComponent } from './formulario/churn/churn.component';

const routes: Routes = [
  {path: '', redirectTo: 'churn', pathMatch: 'full'},
  {path: 'churn', component: ChurnComponent},
  {path: '**', component: ChurnComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
