import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FactionGateway } from '@core/ports';
import { FactionMockAdapter } from '@core/adapters/mock/factionMock.adapter';
import { SecondaryObjectifGateway } from '@core/ports/secondaryObjectif.gateway';
import { SecondaryObjectifMockAdapter } from '@core/adapters/mock/SecondaryObjectifMock.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: FactionGateway, useClass: FactionMockAdapter },
    {
      provide: SecondaryObjectifGateway,
      useClass: SecondaryObjectifMockAdapter,
    },
  ],
};
