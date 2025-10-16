import { Component } from '@angular/core';
import {SplitButton} from "primeng/splitbutton";
import {MenuItem, MenuItemCommandEvent} from "primeng/api";

@Component({
  selector: 'app-translate-button',
  imports: [
    SplitButton
  ],
  templateUrl: './translate-button.component.html',
  styleUrl: './translate-button.component.scss'
})
export class TranslateButtonComponent {
  lang: MenuItem[] = [
    { label: "Русский", icon: "RU", command: (event) => this.changeLanguage(event)},
    { label: "English", icon: "US", command: (event) => this.changeLanguage(event)},
    { label: "Deutsch", icon: "DE", command: (event) => this.changeLanguage(event)},
  ];
  selectedLang: MenuItem = this.lang[0];

  changeLang(event: any): void {
    console.log(event)
  }

  changeLanguage(event: MenuItemCommandEvent): void {
    this.selectedLang = event.item as MenuItem;
  }
}
