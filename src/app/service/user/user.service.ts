import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../../model/user';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getUsersApi = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersApi)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  getUserByAccount(account: string): Observable<User[]> {
    const getUserByAccount = `${this.getUsersApi}?account=${account}`;
    return this.http.get<User[]>(getUserByAccount).pipe(catchError(this.handleError<User[]>(`getUserByAccount account=${account}`, [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
