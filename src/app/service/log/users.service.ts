import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../model/users.modele";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import { UrlApiConstants } from '../url-api-constants';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {

  }

  users?: User[];


  //Get All user
  getAll() {
    return this.httpClient.get<User[]>(UrlApiConstants.API_URL + UrlApiConstants.API_URL_USERS);
  }

  /*getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }*/

}
