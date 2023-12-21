import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './admin-components/add-book/add-book.component';
import { UpdateBookComponent } from './admin-components/update-book/update-book.component';
import { ShowBooklistComponent } from './admin-components/show-booklist/show-booklist.component';
import { ShowBookdetalilsComponent } from './admin-components/show-bookdetalils/show-bookdetalils.component';

const routes: Routes = [
  {path: 'add-book', component: AddBookComponent},
  {path:'update-book/:id', component:UpdateBookComponent },
  {path:'show-booklist', component:ShowBooklistComponent},
  {path:'show-bookdetails/:id', component:ShowBookdetalilsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
