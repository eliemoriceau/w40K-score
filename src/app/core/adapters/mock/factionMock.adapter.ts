import { FactionGateway } from '@core/ports';
import { faction } from '@core/models';
import { factionsMock } from '@mocks/faction.mock';

export class FactionMockAdapter extends FactionGateway {
  private factionsBase: faction[] = factionsMock;

  constructor();
  constructor(factions: faction[]);

  constructor(factions?: faction[]) {
    super();
    if (factions) {
      this.factionsBase = factions;
    }
  }

  createFaction(faction: faction): Promise<void> {
    this.factionsBase.push(faction);
    return Promise.resolve(undefined);
  }

  deleteFaction(id: number): Promise<void> {
    this.factionsBase = this.factionsBase.filter(
      (faction) => faction.id !== id,
    );
    return Promise.resolve(undefined);
  }

  getFaction(id: number): Promise<faction | undefined> {
    const faction = this.factionsBase.find((faction) => faction.id === id);
    return Promise.resolve(faction);
  }

  getFactionByName(name: string): Promise<faction | undefined> {
    return Promise.resolve(undefined);
  }

  getFactions(): Promise<faction[]> {
    return Promise.resolve(this.factionsBase);
  }

  updateFaction(id: number, dataUpdated: Partial<faction>): Promise<void> {
    this.factionsBase = this.factionsBase.map((faction) =>
      faction.id === id ? { ...faction, ...dataUpdated } : faction,
    );
    return Promise.resolve(undefined);
  }
}
