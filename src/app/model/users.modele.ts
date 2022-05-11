import {CardDeck} from "./cardDeck.modele";

export class User {
  private _id: number = 0;
  private _username: string = "username";
  private _role: number = 0;
  private _password : string = "000000";
  private _email : string = "mail@mail.com";


  constructor() {

  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get role(): number {
    return this._role;
  }

  set role(value: number) {
    this._role = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
