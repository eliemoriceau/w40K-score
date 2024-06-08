import { Game } from '@core/models/game.model';
import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  game = signal<Game>(new Game());
  attackerName = computed(() => this.game().getAttackerName());
  defenderName = computed(() => this.game().getDefenderName());
  attackerFaction = computed(() => this.game().getAttackerFaction());
  defenderFaction = computed(() => this.game().getDefenderFaction());

  setGame(game: Game) {
    this.game.set(game);
  }
}
