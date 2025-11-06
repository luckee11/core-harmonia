import {Component} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Checkbox} from "primeng/checkbox";

@Component({
  selector: 'app-checkbox-question',
  imports: [
    Checkbox
  ],
  templateUrl: './checkbox-question.component.html',
  styleUrl: './checkbox-question.component.scss',
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: CheckboxQuestionComponent},
  ]
})
export class CheckboxQuestionComponent implements ControlValueAccessor {

  question = [
    {label: 'Сон', value: 'sleep'},
    {label: 'Питание', value: 'food'},
    {label: 'Ментальное здоровье', value: 'mental'},
    {label: 'Гормоны', value: 'hormones'},
  ];


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
