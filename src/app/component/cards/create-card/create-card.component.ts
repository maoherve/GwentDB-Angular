import {Component, OnInit} from '@angular/core';
import {Card} from "../../../model/card.modele";
import {CardService} from "../../../service/card/card.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CardDeck} from "../../../model/cardDeck.modele";
import {CardDeckService} from "../../../service/card/card-deck.service";
import {RowName} from "../../../model/enum/row-name";
import {Type} from "../../../model/enum/type";
import {Ability} from "../../../model/enum/ability";

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  card: Card = new Card();
  onEdition: boolean = false;

  creationForm: FormGroup;
  error = '';
  cardDecks : CardDeck[];

  rowNames: RowName[] = [
    RowName.EMPTY,
    RowName.CLOSE_COMBAT,
    RowName.AGILE,
    RowName.RANGED,
    RowName.SIEGE
  ];
  types: Type[] = [
    Type.EMPTY,
    Type.HERO,
    Type.LEADER,
    Type.SPECIAL,
    Type.UNIT
  ]
  abilities: Ability[] = [
    Ability.EMPTY,
    Ability.BERSERKER,
    Ability.COMMANDER,
    Ability.MARDROEME,
    Ability.DECOY,
    Ability.MORALE_BOOST,
    Ability.MUSTER,
    Ability.SCORCH,
    Ability.SPY,
    Ability.SUMMON_AVENGER,
    Ability.TIGHT_BOND
  ]

  constructor(
    private cardService: CardService,
    private router :Router,
    private cardDeckService : CardDeckService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.cardDecks=[];
    this.creationForm = new FormGroup({
      name: new FormControl(this.card.name, Validators.required),
      picture: new FormControl(this.card.picture, Validators.required),
      powerLvl: new FormControl(this.card.powerLvl, Validators.required),
      description: new FormControl(this.card.description, Validators.required),
      location: new FormControl(this.card.location, Validators.required),
      ability: new FormControl(this.card.ability, Validators.required),
      rowName: new FormControl(this.card.rowName, Validators.required),
      type: new FormControl(this.card.type, Validators.required),
      cardDeck: new FormControl(this.card.cardDeck, Validators.required),
    });
  }

  get name(): AbstractControl {
    return <AbstractControl> this.creationForm.get('name');
  }
  get picture(): AbstractControl {
    return <AbstractControl> this.creationForm.get('picture');
  }
  get powerLvl(): AbstractControl {
    return <AbstractControl> this.creationForm.get('powerLvl');
  }
  get description(): AbstractControl {
    return <AbstractControl> this.creationForm.get('description');
  }
  get location(): AbstractControl {
    return <AbstractControl> this.creationForm.get('location');
  }
  get ability(): AbstractControl {
    return <AbstractControl> this.creationForm.get('ability');
  }
  get rowName(): AbstractControl {
    return <AbstractControl> this.creationForm.get('rowName');
  }
  get type(): AbstractControl {
    return <AbstractControl> this.creationForm.get('type');
  }
  get cardDeck(): AbstractControl {
    return <AbstractControl> this.creationForm.get('cardDeck');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id: string = params['id'];
      if (id) {
        // récupérer l'objet card depuis l'api
        // initialiser l'attribut "card" avec celle-ci
        console.log('ici dans le if')
        this.onEdition = true;

      }
    });
    this.cardDeckService.getAll().subscribe(data => {
      this.cardDecks = data;
    });
  }

  creationCard() {

    this.error = '';

    if(this.creationForm.valid) {
      const data: any = this.creationForm.value;

      console.log({data});

      this.cardService.createCard(data).subscribe(response => {
        console.log('Card created');
        this.router.navigate(['card']).then(() => {
          window.location.reload();})
      });
    } else {
      this.error = `Formulaire as some errors`;
    }
  }

}
