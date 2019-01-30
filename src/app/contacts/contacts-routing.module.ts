import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './components/contacts-detail/contacts-detail.component';




  const routes: Routes = [
   {path:'contacts',component: ContactsListComponent},
   { path: '', redirectTo: '/contacts', pathMatch: 'full' },
   {path:'contacts/detail', component:ContactsDetailComponent}
  ]


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class ContactsRoutingModule { }
