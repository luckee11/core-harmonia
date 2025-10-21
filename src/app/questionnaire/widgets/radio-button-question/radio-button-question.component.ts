import { Component } from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {RadioButton} from "primeng/radiobutton";

@Component({
  selector: 'app-radio-button-question',
  imports: [
    FormsModule,
    RadioButton,
    ReactiveFormsModule
  ],
  templateUrl: './radio-button-question.component.html',
  styleUrl: './radio-button-question.component.scss',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: RadioButtonQuestionComponent },
  ]
})
export class RadioButtonQuestionComponent implements ControlValueAccessor {
  selectedValue: string = 'excellent';

  question = {
    title: 'Как вы оцениваете свое общее состояние здоровья?',
    payload: [
      {label: 'Отличное', value: 'excellent'},
      {label: 'Хорошее', value: 'good'},
      {label: 'Удовлетворительное', value: 'satisfied'},
      {label: 'Плохое', value: 'bad'},
    ]
  }

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
