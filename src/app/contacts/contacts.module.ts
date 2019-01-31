import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './components/contacts-detail/contacts-detail.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ContactsService } from './services/contacts.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OrderModule } from 'ngx-order-pipe';



@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ContactsRoutingModule,
    HttpClientModule,
    MatListModule,
    SharedModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    OrderModule
  ],
  declarations: [ContactsListComponent, ContactsDetailComponent],
  providers: [
    ContactsService,
  ],
})
export class ContactsModule { }
