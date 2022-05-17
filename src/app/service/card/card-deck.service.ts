import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CardDeck} from "../../model/cardDeck.modele";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Card} from "../../model/card.modele";
import { UrlApiConstants } from '../url-api-constants';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class CardDeckService {

  constructor(private httpClient: HttpClient) {

  }

  cardDecks?: CardDeck[];


  //Get All card deck
  getAll() {
    return this.httpClient.get<CardDeck[]>(UrlApiConstants.API_URL + UrlApiConstants.API_URL_CARDDECKS);
  }

  //Delete card deck
  deleteCardDeck(id : number) {
    const url = `${UrlApiConstants.API_URL + UrlApiConstants.API_URL_CARDDECKS_ID}${id}`;
    return this.httpClient.delete(url, httpOptions);
  }

  //Update
  showCardDeck(id: number): Observable<CardDeck> {
    const url = `${UrlApiConstants.API_URL + UrlApiConstants.API_URL_CARDDECKS_ID}${id}`;
    return this.httpClient.get<CardDeck>(url);
  }
  updateCardDeck(cardDeck : CardDeck) : Observable<CardDeck>
  {
    const url = `${UrlApiConstants.API_URL + UrlApiConstants.API_URL_CARDDECKS_ID}${cardDeck.id}`;
    return this.httpClient.put<CardDeck>(url, cardDeck);
  }


  //Create
  createCardDeck(cardDeck : CardDeck) : Observable<CardDeck>
  {
    return this.httpClient.post<CardDeck>(UrlApiConstants.API_URL + UrlApiConstants.API_URL_CARDDECKS, cardDeck);
  }
}
