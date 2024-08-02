import { Component, inject } from '@angular/core';
import { PlayerTwoStore } from '@app/core/store/player-two.store';
import { PlayerOneStore } from '@core/store/player-one.store';
import { FactionsService } from '@core/services/factions.service';
import { PlayerGameComponent } from '@app/components/player-game/player-game.component';
import { GamePlayerInfoComponent } from '@app/components/game-player-info/game-player-info.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [PlayerGameComponent, GamePlayerInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  readonly playerOneStore = inject(PlayerOneStore);
  readonly playerTwoStore = inject(PlayerTwoStore);
  faction = inject(FactionsService).factions;
}
