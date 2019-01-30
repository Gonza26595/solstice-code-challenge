import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable, throwError } from '../../../../node_modules/rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) {

   }

   private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      return throwError(error.status);
    };
  }

  protected get(url: string): Observable<any> {
    return this.http.get<any[]>(url).pipe(catchError(this.handleError()));
  }

  protected getById(url: string, id: any) {
    return this.http
      .get<any[]>(url + "/" + id)
      .pipe(catchError(this.handleError()));
  }
}
