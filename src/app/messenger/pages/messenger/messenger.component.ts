import { Component } from '@angular/core';
import {Button, ButtonDirective, ButtonIcon} from "primeng/button";
import {TranslateButtonComponent} from "../../../shared/components/translate-button/translate-button.component";
import {PasswordDirective} from "primeng/password";
import {ReactiveFormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {DatePipe, NgClass} from "@angular/common";
import {Router} from "@angular/router";

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
    NgClass
  ],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss'
})
export class MessengerComponent {
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

  back(): void {
    this.router.navigate(['/']);
  }
}
