import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-health-card',
	imports: [
		NgOptimizedImage,
	],
  templateUrl: './health-card.component.html',
  styleUrl: './health-card.component.scss'
})
export class HealthCardComponent {
	@Input() icon!: string;
	@Input() title!: string;
	@Input() subTitle!: string;
	@Input() isNew!: boolean;
	@Output() healthCardEmit = new EventEmitter();

	openChat(): void {
		this.healthCardEmit.emit();
	}
}
