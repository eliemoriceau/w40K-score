import { Component, inject } from '@angular/core';
import { FactionSelectorComponent } from '@app/components/faction-selector/faction-selector.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Game } from '@core/models/game.model';
import { Faction } from '@core/models';
import { GameService } from '@core/services/game.service';
import { FactionsService } from '@core/services/factions.service';

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

  attName = new FormControl<string>('');
  defName = new FormControl<string>('');
  attFaction = new FormControl<Faction | undefined>(undefined);
  defFaction = new FormControl<Faction | undefined>(undefined);

  validateGame(): Game | undefined {
    const attName = this.attName.value;
    const defName = this.defName.value;
    const attFaction = this.attFaction.value;
    const defFaction = this.defFaction.value;
    if (!attName || !defName || !attFaction || !defFaction) return;

    const game = new Game({ attFaction, attName, defName, defFaction });

    this.gameService.setGame(game);
    return game;
  }
}
