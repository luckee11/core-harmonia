import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../header/widgets/header/header.component';
import { HealthCardComponent } from '../../widgets/health-card/health-card.component';
import { ChatIconByCategory } from '../../main.enums';
import { HealthCardService } from '../../services/health-card.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HealthCard } from '../../interfaces/HealthCard';
import { ChatService } from '../../../messenger/services/chat.service';

@Component({
  selector: 'app-main',
	imports: [
		HeaderComponent,
		HealthCardComponent,
		AsyncPipe,
	],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
	cards$: Observable<HealthCard[]> = this.healthCardService.cards$;

	chatIconByCategory = ChatIconByCategory

	constructor(
		private router: Router,
		private healthCardService: HealthCardService,
		private chatService: ChatService,
	) {
	}

	ngOnInit(): void {
		this.healthCardService.getHealthCards();

	}

	onHealthCard(card: HealthCard): void {
		if (!card.hasChat) {
			this.chatService.createChat(card.category, card.id).subscribe(() => {
				this.navigateToChat(card);
			})

			return;
		}

		this.navigateToChat(card);
	}

	private navigateToChat(card: HealthCard): void {
		this.router.navigate(['messenger', card.category]).catch();
	}
}
