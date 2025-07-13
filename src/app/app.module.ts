import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { AuthComponent } from './auth/pages/auth/auth.component';
import { RouterModule } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeuix/themes/aura';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        CommonModule,
        AuthComponent,
        RouterModule,

    ],
    providers: [
        provideHttpClient(),
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
