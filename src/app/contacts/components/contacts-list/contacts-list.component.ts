import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { DataService } from '../../../shared/services/data.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { Contact } from '../../classes/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {


  contactsList = new Array();

  constructor(private _contactsService: ContactsService,
              private _dataService:DataService,
              private _router:Router) { }

  ngOnInit() {
    this._contactsService.getContactsList().subscribe(
      data => {
        console.log(data);
        this.contactsList = data;
      }
    )
  }

  changeSource(event) {
    event.target.src = "assets/images/User Icon Small@3x.png"
  }


  goToContactDetail(contact:any){
   this._dataService.passContactObjectInfo(contact);

   this._router.navigate(["contacts/detail"])
  }

}
