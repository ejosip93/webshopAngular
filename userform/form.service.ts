import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private httpClient: HttpClient) { }

  sendForm(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:8080/narudzba', user, httpOptions);
  }
}
