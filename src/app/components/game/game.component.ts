import { Component, computed, inject } from '@angular/core';
import { PlayerTwoStore } from '@app/core/store/player-two.store';
import { PlayerOneStore } from '@core/store/player-one.store';
import { FactionsService } from '@core/services/factions.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  readonly playerOneStore = inject(PlayerOneStore);
  readonly playerTwoStore = inject(PlayerTwoStore);
  faction = inject(FactionsService).factions;
  playerOneFaction = computed(() =>
    this.faction().find((f) => f.id === this.playerOneStore.factionId()),
  );

  playerTwoFaction = computed(() =>
    this.faction().find((f) => f.id === this.playerTwoStore.factionId()),
  );
}
