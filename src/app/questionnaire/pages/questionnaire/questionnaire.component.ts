import { Component } from '@angular/core';
import {ButtonDirective, ButtonIcon} from "primeng/button";
import {TranslateButtonComponent} from "../../../shared/components/translate-button/translate-button.component";
import {RouterLink} from "@angular/router";
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import {RadioButtonQuestionComponent} from "../../widgets/radio-button-question/radio-button-question.component";


@Component({
  selector: 'app-questionnaire',
  imports: [
    ButtonDirective,
    ButtonIcon,
    TranslateButtonComponent,
    RouterLink,
    ProgressBarModule,
    ToastModule,
    RadioButtonQuestionComponent
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss'
})
export class QuestionnaireComponent {

}
