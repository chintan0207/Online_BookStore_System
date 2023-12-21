import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddBookComponent } from './admin-components/add-book/add-book.component';
import { UpdateBookComponent } from './admin-components/update-book/update-book.component';
import { ShowBooklistComponent } from './admin-components/show-booklist/show-booklist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowBookdetalilsComponent } from './admin-components/show-bookdetalils/show-bookdetalils.component';


@NgModule({
  declarations: [
    AddBookComponent,
    UpdateBookComponent,
    ShowBooklistComponent,
    ShowBookdetalilsComponent
 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
 
  ]
})
export class AdminModule { }
