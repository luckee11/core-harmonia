import { Component } from '@angular/core';
import {ButtonDirective, ButtonIcon, ButtonLabel} from "primeng/button";
import {TranslateButtonComponent} from "../../../shared/components/translate-button/translate-button.component";
import {RouterLink} from "@angular/router";
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import {CheckboxQuestionComponent} from "../../widgets/checkbox-question/checkbox-question.component";


@Component({
  selector: 'app-questionnaire',
  imports: [
    ButtonDirective,
    ButtonIcon,
    TranslateButtonComponent,
    RouterLink,
    ProgressBarModule,
    ToastModule,
    ButtonLabel,
    CheckboxQuestionComponent
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss'
})
export class QuestionnaireComponent {

}
