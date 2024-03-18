import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: 'peticion', redirectTo: 'peticion/index', pathMatch: 'full'},
  { path: 'peticion/index', component: IndexComponent },
  { path: 'peticion/:peticionId/view', component: ViewComponent },
  { path: 'peticion/create', component: CreateComponent },
  { path: 'peticion/:peticionId/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeticionRoutingModule { }