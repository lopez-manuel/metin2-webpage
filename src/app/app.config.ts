import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG } from 'src/environments/environment.injection';
import { environment } from 'src/environments/environment';
import { provideHttpClient } from '@angular/common/http';

const scrollConfiguration: InMemoryScrollingOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top'
}

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfiguration);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, inMemoryScrollingFeature),
    provideHttpClient(),
    { provide: APP_CONFIG, useValue: environment }
  ]
};
