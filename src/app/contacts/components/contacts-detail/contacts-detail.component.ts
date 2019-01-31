import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Contact } from '../../classes/contact';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  contactsList = new Array();
  contact:Contact;
  sessionStorageObject;

  constructor(private _contactsService:ContactsService,
              private _activatedRoute:ActivatedRoute,
              private _location:Location) { }

  ngOnInit() {

    let contactId = this._activatedRoute.snapshot.paramMap.get("contactId");
    this.sessionStorageObject = JSON.parse(sessionStorage.getItem("contactsList"));


    if(this.sessionStorageObject != null){
      this.handleContactDetailVisualization(contactId,this.sessionStorageObject)
    } else {
      this._contactsService.getContactsList().subscribe(
      contacts =>{
      this.handleContactDetailVisualization(contactId,contacts)
    })
    }


    }

   

  changeSource(event) {event.target.src = "assets/images/User Icon Small@3x.png"}


  public createContactInstance(contact:any):Contact{
    this.contact = new Contact(contact.name,
                               contact.birthdate,
                               contact.companyName,
                               contact.address.city,
                               contact.address.country,
                               contact.address.street,
                               contact.address.state,
                               contact.address.zipCode,
                               contact.emailAddress,
                               contact.isFavorite,
                               contact.phone.home,
                               contact.phone.work,
                               contact.phone.mobile,
                               contact.smallImageURL,
                               contact.largeImageURL);

   this.contact.id = contact.id;


  return this.contact;


  }


  
  public goBackToList(){
    this._location.back();
  }


  public saveContactFavoriteChangesOnList(){
    for(let contact of this.contactsList){
      if(this.contact.id == contact.id){
        contact.isFavorite = this.contact.isFavorite
      }
    }
    sessionStorage.setItem('contactsList',JSON.stringify(this.contactsList));
  }


  public handleContactDetailVisualization(contactId,contactsList){
    this.contactsList = contactsList;
    for(let contact of this.contactsList){
      if(contact.id == contactId){
        this.createContactInstance(contact);
        console.log(contact);
      }
    }
  }


  public changeToFavoriteFalse(){
    this.contact.isFavorite = false;    
    this.saveContactFavoriteChangesOnList();}

  public changeToFavoriteTrue(){
    this.contact.isFavorite = true;
    this.saveContactFavoriteChangesOnList();}

}
