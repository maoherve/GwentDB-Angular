import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from "../component/cards/card/card.component";
import {CardDeckComponent} from "../component/card-decks/card-deck/card-deck.component";
import {UpdateCardComponent} from "../component/cards/update-card/update-card.component";
import {CreateCardComponent} from "../component/cards/create-card/create-card.component";
import {UpdateCardDeckComponent} from "../component/card-decks/update-card-deck/update-card-deck.component";
import {CreateCardDeckComponent} from "../component/card-decks/create-card-deck/create-card-deck.component";
import {UserComponent} from "../component/users/user/user.component";
import {HomeCardComponent} from "../component/cards/home-card/home-card.component";
import {LoginComponent} from "../component/log/login/login.component";
import {ProfileComponent} from "../component/users/profile/profile.component";
import { AuthGuard } from "../service/log/auth-guard.service";

const routes: Routes = [

  { path: 'home', component: HomeCardComponent },

  { path: 'card', component: CardComponent/*, canActivate: [AuthGuard] */},
  { path: 'cardDeck', component: CardDeckComponent },
  { path: 'updateCard/:id', component: UpdateCardComponent },
  { path: 'createCard', component: CreateCardComponent },

  { path: 'updateCardDeck/:id', component: UpdateCardDeckComponent },
  { path: 'createCardDeck', component: CreateCardDeckComponent },

  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },

  { path: "", redirectTo: "card", pathMatch: "full" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

