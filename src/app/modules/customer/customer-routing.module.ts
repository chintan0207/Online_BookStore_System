import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBooklistComponent } from './customer-components/show-booklist/show-booklist.component';
import { BookDetailsComponent } from './customer-components/book-details/book-details.component';
import { ContactUsComponent } from './customer-components/contact-us/contact-us.component';

const routes: Routes = [
  {path:'show-booklist', component:ShowBooklistComponent},
  {path:'book-details/:id', component:BookDetailsComponent},
  {path: 'contact-us', component:ContactUsComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
