import { CardDeck } from './cardDeck.modele';

export class Card {

  private _id : number = 0;
  private _name: string = "";
  private _picture: string = "";
  private _powerLvl : number = 0;
  private _description : string = "";
  private _location : string = "";
  private _cardDeck : CardDeck = new CardDeck();
  private _ability : string = "";
  private _rowName : string = "";
  private _type : string = "";


  constructor() {

  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get powerLvl(): number {
    return this._powerLvl;
  }

  set powerLvl(value: number) {
    this._powerLvl = value;
  }

  get description(): string {
    return this._description;
  }


  get cardDeck(): CardDeck {
    return this._cardDeck;
  }

  set cardDeck(value: CardDeck) {
    this._cardDeck = value;
  }

  set description(value: string) {
    this._description = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }



  get ability(): string {
    return this._ability;
  }

  set ability(value: string) {
    this._ability = value;
  }

  get rowName(): string {
    return this._rowName;
  }

  set rowName(value: string) {
    this._rowName = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
