import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { Contact } from '../../classes/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contactsList = new Array();
  favoriteContactsList = new Array();
  otherContactsList = new Array();
  sessionStorageObject;
  order = 'name'

  constructor(private _contactsService: ContactsService,
              private _router:Router) { }

  ngOnInit() {

    this.sessionStorageObject =JSON.parse(sessionStorage.getItem('contactsList'));
    this.handleListVisualization();

  }

  changeSource(event) {
    event.target.src = "assets/images/User Icon Small@3x.png"
  }


  public handleListVisualization(){
   if(this.sessionStorageObject != null){
     this.contactsList = this.sessionStorageObject;
     this.checkForFavoriteOrOtherContacts(this.contactsList)
   } else {
    this._contactsService.getContactsList().subscribe(
      contacts => {
        this.contactsList = contacts;
        this.checkForFavoriteOrOtherContacts(this.contactsList)
      }
    )
   }
  }


  public checkForFavoriteOrOtherContacts(contactsList){
    for(let contact of contactsList){
      if(!contact.isFavorite){
        this.otherContactsList.push(contact);
      } else {
        this.favoriteContactsList.push(contact);
      }      
    }

  }


}
