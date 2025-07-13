import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeuix/themes/aura';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { MessengerModule } from './messenger/messenger.module';
import { MainModule } from './main/main.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgOptimizedImage,
		CommonModule,
		RouterModule,
		AuthModule,
		MessengerModule,
		MainModule
	],
	providers: [
		provideHttpClient(),
		provideAnimationsAsync(),
		providePrimeNG({
			theme: {
				preset: Aura,
			},
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
