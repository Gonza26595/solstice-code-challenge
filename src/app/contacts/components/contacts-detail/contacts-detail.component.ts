import { Component, OnInit, HostListener } from '@angular/core';
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
  favoriteTrueImageSrc:string;
  favoriteFalseImageSrc:string;
  placeholderImageSrc:string;

  constructor(private _contactsService:ContactsService,
              private _activatedRoute:ActivatedRoute,
              private _location:Location) { }

  ngOnInit() {
    window.scrollTo(0, 0);
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

   this.detectOnInitFavoriteStarAndPlaceholderSize();

    }



    onImageError(event) {
      event.target.src = this.placeholderImageSrc;

    }


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


  public detectOnInitFavoriteStarAndPlaceholderSize(){
    if(window.matchMedia("(min-width: 850px)").matches){
      this.setFavoriteAndPlaceholderImagesBySize('3x');
    } else if (window.matchMedia("(min-width: 450px) and (max-width: 850px)").matches){
      this.setFavoriteAndPlaceholderImagesBySize('2x');
    } else {
      this.setFavoriteAndPlaceholderImagesBySize('1x');
    }
  }


  @HostListener('window:resize', ['$event'])
  FavoriteStarAndPlaceholderImagesResize(event) {
    if(event.target.innerWidth >= 850){
     this.setFavoriteAndPlaceholderImagesBySize('3x');
    } else if (event.target.innerWidth < 850 && event.target.innerWidth > 450){
    this.setFavoriteAndPlaceholderImagesBySize('2x')
    } else {
    this.setFavoriteAndPlaceholderImagesBySize('1x')
    }
  }


  public setFavoriteAndPlaceholderImagesBySize(size:string){
    if(size == '1x'){
      this.placeholderImageSrc = "assets/images/User — Large.png"
      this.favoriteFalseImageSrc = "assets/images/Favorite — False.png"
      this.favoriteTrueImageSrc = "assets/images/Favorite — True.png"
    } else if (size == '2x'){
      this.placeholderImageSrc = "assets/images/User — Large@2x.png"
      this.favoriteFalseImageSrc = "assets/images/Favorite — False@2x.png"
      this.favoriteTrueImageSrc = "assets/images/Favorite — True@2x.png"
    } else if(size == '3x'){
      this.placeholderImageSrc = "assets/images/User — Large@3x.png"
      this.favoriteFalseImageSrc  = "assets/images/Favorite — False@3x.png"
      this.favoriteTrueImageSrc = "assets/images/Favorite — True@3x.png"
    }
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
      }}}


  public changeToFavoriteFalse(){
    this.contact.isFavorite = false;
    this.saveContactFavoriteChangesOnList();}

  public changeToFavoriteTrue(){
    this.contact.isFavorite = true;
    this.saveContactFavoriteChangesOnList();}


  public goBackToList(){this._location.back();}

}

