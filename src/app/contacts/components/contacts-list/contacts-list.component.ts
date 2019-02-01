import { Component, OnInit, HostListener } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Contact } from '../../classes/contact';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {

  contactsList = new Array();
  favoriteContactsList = new Array();
  otherContactsList = new Array();
  sessionStorageContactList;
  placeholderImageSrc:string;

  constructor(private _contactsService: ContactsService,
              private _router:Router,
) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.sessionStorageContactList = JSON.parse(sessionStorage.getItem('contactsList'));

    this.handleListVisualization();
    this.detectOnInitPlaceholderImageSize();
  }

  onImageError(event) {
    event.target.src = this.placeholderImageSrc;
  }

  @HostListener('window:resize', ['$event'])
  placeholderImageResize(event) {
  if(event.target.innerWidth >= 850){
    this.placeholderImageSrc = "assets/images/User Icon Small@3x.png"
  } else if (event.target.innerWidth < 850 && event.target.innerWidth > 550){
    this.placeholderImageSrc = "assets/images/User Icon Small@2x.png"
  } else {
    this.placeholderImageSrc = "assets/images/User Icon Small.png"
  }
}


public detectOnInitPlaceholderImageSize(){

  if(window.matchMedia("(min-width: 850px)").matches){
    this.placeholderImageSrc = "assets/images/User Icon Small@3x.png"
  } else if (window.matchMedia("(min-width: 550px) and (max-width: 850px)").matches){
    this.placeholderImageSrc = "assets/images/User Icon Small@2x.png"
  } else {
    this.placeholderImageSrc = "assets/images/User Icon Small.png"
  }
}


  public handleListVisualization(){
   if(this.sessionStorageContactList != null){
     this.contactsList = this.sessionStorageContactList;
     this.createFavoriteAndOtherContactsLists(this.contactsList)
   } else {
    this._contactsService.getContactsList().subscribe(
      contacts => {
        this.contactsList = contacts;
        this.createFavoriteAndOtherContactsLists(this.contactsList)
      }
    )
   }
  }


  public createFavoriteAndOtherContactsLists(contactsList){
    for(let contact of contactsList){
      if(!contact.isFavorite){
        this.otherContactsList.push(contact);
      } else {
        this.favoriteContactsList.push(contact);
      }
    }

  }


}
