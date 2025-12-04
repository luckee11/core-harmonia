import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ChatBgClass, ChatIconByCategory} from "../../main.enums";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-health-card',
  imports: [
    NgClass
  ],
  templateUrl: './health-card.component.html',
  styleUrl: './health-card.component.scss'
})
export class HealthCardComponent {
	@Input() icon!: keyof typeof ChatIconByCategory;
	@Input() title!: string;
	@Input() subTitle!: string;
	@Input() isNew!: boolean;
	@Output() healthCardEmit = new EventEmitter();

	openChat(): void {
		this.healthCardEmit.emit();
	}

  protected readonly ChatIconByCategory = ChatIconByCategory;
  protected readonly ChatBgClass = ChatBgClass;
}
