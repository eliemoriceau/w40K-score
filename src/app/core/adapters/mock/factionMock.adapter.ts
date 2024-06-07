import { FactionGateway } from '@core/ports';
import { Faction } from '@core/models';
import { factionsMock } from '@mocks/faction.mock';
import vine from '@vinejs/vine';
import { factionSchema } from '@core/schema/faction.schema';

export class FactionMockAdapter extends FactionGateway {
  private factionsBase: Faction[] = factionsMock;

  createFaction(faction: Faction): Promise<void> {
    this.factionsBase.push(faction);
    return Promise.resolve(undefined);
  }

  deleteFaction(id: number): Promise<void> {
    this.factionsBase = this.factionsBase.filter(
      (faction) => faction.id !== id,
    );
    return Promise.resolve(undefined);
  }

  getFaction(id: number): Promise<Faction | undefined> {
    const faction = this.factionsBase.find((faction) => faction.id === id);
    return Promise.resolve(faction);
  }

  getFactionByName(name: string): Promise<Faction | undefined> {
    return Promise.resolve(undefined);
  }

  async getFactions(): Promise<Faction[]> {
    const result = vine.validate({
      schema: vine.array(factionSchema),
      data: this.factionsBase,
    });
    return result;
  }

  updateFaction(id: number, dataUpdated: Partial<Faction>): Promise<void> {
    this.factionsBase = this.factionsBase.map((faction) =>
      faction.id === id ? { ...faction, ...dataUpdated } : faction,
    );
    return Promise.resolve(undefined);
  }
}
