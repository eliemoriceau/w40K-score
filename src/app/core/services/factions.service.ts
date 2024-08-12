import { inject, Injectable, OnInit, signal } from '@angular/core';
import { FactionGateway } from '@core/ports';
import { Faction } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class FactionsService implements OnInit {
  factions = signal<Faction[]>([]);

  factionsGateway = inject(FactionGateway);

  async ngOnInit(): Promise<void> {
    this.factions.set(await this.factionsGateway.getFactions());
  }
}
