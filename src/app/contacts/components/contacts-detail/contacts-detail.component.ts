import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { Contact } from '../../classes/contact';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {


  contact:Contact;

  constructor(private _contactsService:ContactsService,
              private _dataService:DataService,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {


    this._dataService.contactbjectInfo.subscribe(
      data=>{
        this.createContactInstance(data);
        console.log(data);
      }
    )

  }

  changeSource(event) {
    event.target.src = "assets/images/User Icon Small@3x.png"
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


  return this.contact;


  }

}
