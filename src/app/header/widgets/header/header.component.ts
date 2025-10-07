import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {TranslateButtonComponent} from "../../../shared/components/translate-button/translate-button.component";
import {Button} from "primeng/button";

@Component({
  selector: 'app-header',
  imports: [
    TranslateButtonComponent,
    Button,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
