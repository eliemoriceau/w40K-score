import { computed, inject, Injectable, OnInit, signal } from '@angular/core';
import { FactionGateway } from '@core/ports';
import { Faction } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class FactionsService implements OnInit {
  factions = signal<Faction[]>([]);
  playerOneFactionId = signal<number | undefined>(undefined);
  playerTwoFactionId = signal<number | undefined>(undefined);
  playerOneFaction = computed(() =>
    this.factions().find((faction) => faction.id === this.playerOneFactionId()),
  );
  playerTwoFaction = computed(() =>
    this.factions().find((faction) => faction.id === this.playerTwoFactionId()),
  );

  factionsGateway = inject(FactionGateway);

  async ngOnInit(): Promise<void> {
    console.log('FactionsService');
    this.factions.set(await this.factionsGateway.getFactions());
  }

  playerOneFactionSelectedId(factionId: number): void {
    this.playerOneFactionId.set(factionId);
  }

  playerTwoFactionSelectedId(factionId: number): void {
    this.playerTwoFactionId.set(factionId);
  }
}
