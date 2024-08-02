import { SecondaryObjectif } from '@core/models/secondaryObjectif.model';

export abstract class SecondaryObjectifGateway {
  abstract getAllSecondaryObjectif(): Promise<SecondaryObjectif[]>;

  abstract getSecondaryObjectifById(
    id: string,
  ): Promise<SecondaryObjectif | null>;
}
