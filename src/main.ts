import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {providePrimeNG} from "primeng/config";
import Aura from '@primeuix/themes/aura';
import {ApplicationConfig, provideAppInitializer} from "@angular/core";
import {provideRouter} from "@angular/router";
import {APP_ROUTES} from "./app/app-routes";
import {authInterceptor} from "./app/core/interseptors/auth.interseptor";
import {initializeAppConfig} from "./app/core/initializer/app-initializer";

const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideRouter(APP_ROUTES),
    provideAppInitializer(initializeAppConfig)
  ]
}

bootstrapApplication(AppComponent, appConfig).catch((err) => console.log(err));
