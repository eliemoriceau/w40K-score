import { faction } from '@core/models';

export abstract class FactionGateway {
  abstract getFactions(): Promise<faction[]>;
  abstract getFaction(id: number): Promise<faction | undefined>;
  abstract getFactionByName(name: string): Promise<faction | undefined>;
  abstract createFaction(faction: faction): Promise<void>;
  abstract updateFaction(
    id: number,
    dataUpdated: Partial<faction>,
  ): Promise<void>;
  abstract deleteFaction(id: number): Promise<void>;
}
