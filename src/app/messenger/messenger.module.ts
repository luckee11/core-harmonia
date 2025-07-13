import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessengerRoutingModule } from './messenger-routing.module';
import { MessengerComponent } from './pages/messenger/messenger.component';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MessengerRoutingModule,
		MessengerComponent,
	],
})
export class MessengerModule {
}
