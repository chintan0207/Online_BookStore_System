import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ShowBooklistComponent } from './customer-components/show-booklist/show-booklist.component';
import { FormsModule } from '@angular/forms';
import { BookDetailsComponent } from './customer-components/book-details/book-details.component';


@NgModule({
  declarations: [
    ShowBooklistComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ]
})
export class CustomerModule { }
