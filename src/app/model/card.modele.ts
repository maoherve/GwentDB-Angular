import {CardDeck} from './cardDeck.modele';
import {RowName} from "./enum/row-name";
import {Ability} from "./enum/ability";
import {Type} from "./enum/type";

export class Card {

  private _id : number = 0;
  private _name: string = "";
  private _picture: string = "";
  private _powerLvl : number = 0;
  private _description : string = "";
  private _location : string = "";
  private _ability : Ability = Ability.EMPTY;
  private _rowName : RowName = RowName.EMPTY;
  private _type : Type = Type.EMPTY;
  private _cardDeck : CardDeck = new CardDeck();


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



  get ability(): Ability {
    return this._ability;
  }

  set ability(value: Ability) {
    this._ability = value;
  }

  get rowName(): RowName {
    return this._rowName;
  }

  set rowName(value: RowName) {
    this._rowName = value;
  }

  get type(): Type {
    return this._type;
  }

  set type(value: Type) {
    this._type = value;
  }
}
