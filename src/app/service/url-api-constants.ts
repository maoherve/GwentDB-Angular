import { HttpHeaders } from "@angular/common/http";

export class UrlApiConstants {

    static API_URL: string = 'http://localhost:8080';

    static API_URL_USERS: string = '/user';
    static API_URL_USERS_ID: string = '/user/';

    static API_URL_AUTH: string = '/api/auth/';

    static API_URL_CARDDECKS: string = '/cardDecks';
    static API_URL_CARDDECKS_ID: string = '/cardDecks/';

    static API_URL_CARDS: string = '/cards';
    static API_URL_CARDS_ID: string = '/cards/';



    static headers: {headers: HttpHeaders} = {
      headers: new HttpHeaders({
        'Content-type': 'application/ld+json',
      })
    };

  }