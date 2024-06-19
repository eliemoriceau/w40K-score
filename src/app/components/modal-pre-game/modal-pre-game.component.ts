import { Component, inject } from '@angular/core';
import { FactionSelectorComponent } from '@app/components/faction-selector/faction-selector.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Game } from '@core/models/game.model';
import { Faction } from '@core/models';
import { GameService } from '@core/services/game.service';
import { FactionsService } from '@core/services/factions.service';
import { getState, patchState } from '@ngrx/signals';
import { PlayerOneStore } from '@core/store/player-one.store';
import { PlayerTwoStore } from '@core/store/player-two.store';

@Component({
  selector: 'app-modal-pre-game',
  standalone: true,
  imports: [FactionSelectorComponent, ReactiveFormsModule],
  templateUrl: './modal-pre-game.component.html',
  styleUrl: './modal-pre-game.component.css',
})
export class ModalPreGameComponent {
  gameService = inject(GameService);
  factionService = inject(FactionsService);
  playerOneStore = inject(PlayerOneStore);
  playerTwoStore = inject(PlayerTwoStore);

  attName = new FormControl<string>('');
  defName = new FormControl<string>('');
  attFaction = new FormControl<Faction | undefined>(undefined);
  defFaction = new FormControl<Faction | undefined>(undefined);

  validateGame() {
    const attName = this.attName.value;
    const defName = this.defName.value;
    const attFaction = this.attFaction.value;
    const defFaction = this.defFaction.value;
    if (!attName || !defName || !attFaction || !defFaction) return;

    const game = new Game({ attFaction, attName, defName, defFaction });

    console.log('Game created', {
      player1: getState(this.playerOneStore),
      player2: getState(this.playerTwoStore),
    });
  }

  setFactionPlayerTwo($event: unknown) {
    if (typeof $event === 'number') {
      console.log('setFactionPlayerTwo', $event);
      patchState(this.playerTwoStore, { factionId: $event });
    }
  }

  setFactionPlayerOne($event: unknown) {
    if (typeof $event === 'number') {
      patchState(this.playerOneStore, { factionId: $event });
    }
  }

  setNamePlayerOne($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    patchState(this.playerOneStore, { name: value });
  }

  setNamePlayerTwo($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    patchState(this.playerTwoStore, { name: value });
  }
}
