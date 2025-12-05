import {Component, OnInit, inject} from '@angular/core';
import {Button, ButtonDirective, ButtonIcon} from "primeng/button";
import {TranslateButtonComponent} from "../../../shared/components/translate-button/translate-button.component";
import {ReactiveFormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {AsyncPipe, DatePipe, NgClass} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {HealthCardService} from "../../../main/services/health-card.service";
import {filter, Observable, take} from "rxjs";
import {HealthCard} from "../../../main/types/HealthCard";
import {ChatBgClass} from "../../../main/main.enums";

@Component({
  selector: 'app-messenger',
  imports: [
    Button,
    TranslateButtonComponent,
    ReactiveFormsModule,
    InputText,
    ButtonDirective,
    ButtonIcon,
    DatePipe,
    NgClass,
    AsyncPipe
  ],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss'
})
export class MessengerComponent implements OnInit {
  healthCardService = inject(HealthCardService);
  activatedRoute = inject(ActivatedRoute);
  card$!: Observable<HealthCard>;

  messages = [
    {
      text: 'Hello, World!',
      date: new Date(),
      direction: 'income'
    },
    {
      text: 'Hello, World!',
      date: new Date(),
      direction: 'outcome'
    },
    {
      text: 'Hello, World!',
      date: new Date(),
      direction: 'outcome'
    },
    {
      text: 'Hello, World!',
      date: new Date(),
      direction: 'outcome'
    },
    {
      text: 'Hello, World!',
      date: new Date(),
      direction: 'income'
    },
    {
      text: 'Hello, World!',
      date: new Date(),
      direction: 'income'
    }

  ]

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      filter(params => params['subjectId']),
      take(1)
    ).subscribe(params => {
      this.card$ = this.healthCardService.getHealthCard(params['subjectId'])
    })

  }

  back(): void {
    this.router.navigate(['/']);
  }

  protected readonly ChatBgClass = ChatBgClass;
}
