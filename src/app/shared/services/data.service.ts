import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';
import { Contact } from '../../contacts/classes/contact';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  private contactObject = new BehaviorSubject<Object>({});
  contactbjectInfo = this.contactObject.asObservable();

  constructor() {

  }



  public passContactObjectInfo(contact:any) {
    this.contactObject.next(contact);

   }

  }