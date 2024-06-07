import { Faction } from '@core/models';

export abstract class FactionGateway {
  abstract getFactions(): Promise<Faction[]>;
  abstract getFaction(id: number): Promise<Faction | undefined>;
  abstract getFactionByName(name: string): Promise<Faction | undefined>;
  abstract createFaction(faction: Faction): Promise<void>;
  abstract updateFaction(
    id: number,
    dataUpdated: Partial<Faction>,
  ): Promise<void>;
  abstract deleteFaction(id: number): Promise<void>;
}
