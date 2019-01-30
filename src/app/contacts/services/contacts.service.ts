import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { BaseService } from '../../shared/services/base.service';
import { Observable } from '../../../../node_modules/rxjs';
import { SystemConfiguration } from '../../configuration/system.configuration';

@Injectable({
  providedIn: 'root'
})
export class ContactsService extends BaseService {

  constructor(private _http: HttpClient) {
    super(_http);
   }


   public getContactsList(): Observable<any[]> {
    return super.get(
      SystemConfiguration.CONTACTS_LIST
    )
  }


  public getContactById(contactId:string): Observable<any> {
    return super.getById(
       SystemConfiguration.CONTACTS_LIST,
       contactId
    )
  }
}
