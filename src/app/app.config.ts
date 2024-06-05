import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FactionGateway } from '@core/ports';
import { FactionMockAdapter } from '@core/adapters/mock/factionMock.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: FactionGateway, useClass: FactionMockAdapter },
  ],
};
