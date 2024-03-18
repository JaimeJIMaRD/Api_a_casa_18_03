import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { PeticionRoutingModule } from './peticion-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    PeticionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PeticionModule { }