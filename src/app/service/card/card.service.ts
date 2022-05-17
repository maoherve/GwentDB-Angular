import { Injectable } from '@angular/core';
import { Card } from '../../model/card.modele';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import { UrlApiConstants } from '../url-api-constants';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient) {

  }

  cards?: Card[];


  //Get All card
  getAll() {
    return this.httpClient.get<Card[]>(UrlApiConstants.API_URL + UrlApiConstants.API_URL_CARDS);
  }

  //Delete card
  deleteCard(id : number) {
    const url = `${UrlApiConstants.API_URL + UrlApiConstants.API_URL_CARDS_ID}${id}`;
    return this.httpClient.delete(url, httpOptions);
  }


  //Update
  showCard(id: number): Observable<Card> {
    const url = `${UrlApiConstants.API_URL + UrlApiConstants.API_URL_CARDS_ID}${id}`;
    return this.httpClient.get<Card>(url);
  }
  updateCard(card : Card) : Observable<Card>
  {
    const url = `${UrlApiConstants.API_URL + UrlApiConstants.API_URL_CARDS_ID}${card.id}`;
    return this.httpClient.put<Card>(url, card);
  }

  //Create
  createCard(card : Card) : Observable<Card>
  {
    return this.httpClient.post<Card>(UrlApiConstants.API_URL + UrlApiConstants.API_URL_CARDS, card);
  }

  /*find by name
  findByCardsName(name : string)
  {
    const url = `${environment.API_URL}/card-name/${name}`;
    return this.httpClient.get<Card[]>( url );
  }*/

}
