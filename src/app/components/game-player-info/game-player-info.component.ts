import { Component, computed, input } from '@angular/core';
import { Faction } from '@core/models';
import { PlayerState } from '@core/store/player-one.store';

@Component({
  selector: 'app-game-player-info',
  standalone: true,
  imports: [],
  templateUrl: './game-player-info.component.html',
  styleUrl: './game-player-info.component.css',
})
export class GamePlayerInfoComponent {
  faction = input.required<Faction[]>();
  player = input.required<PlayerState>();
  playerOneFaction = computed(() =>
    this.faction().find((f) => f.id === this.player().factionId),
  );
}
