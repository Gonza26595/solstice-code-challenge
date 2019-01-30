import { HttpHeaders } from "@angular/common/http";

export class SystemConfiguration {
  public static HTTP_OPTIONS = { headers: new HttpHeaders({
      "Content-Type": "application/json"
    }) };

  public static FILE_UPLOAD_HTTP_OPTIONS = { headers: new HttpHeaders(
      { "Content-Type": "multipart/form-data" }
    ) };


    public static CONTACTS_LIST: string = " https://s3.amazonaws.com/technical-challenge/v3/contacts.json"








  }
