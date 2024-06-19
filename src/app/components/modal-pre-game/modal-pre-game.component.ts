import { Component, inject } from '@angular/core';
import { FactionSelectorComponent } from '@app/components/faction-selector/faction-selector.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FactionsService } from '@core/services/factions.service';
import { patchState } from '@ngrx/signals';
import { PlayerOneStore } from '@core/store/player-one.store';
import { PlayerTwoStore } from '@core/store/player-two.store';

@Component({
  selector: 'app-modal-pre-game',
  standalone: true,
  imports: [FactionSelectorComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './modal-pre-game.component.html',
  styleUrl: './modal-pre-game.component.css',
})
export class ModalPreGameComponent {
  factionService = inject(FactionsService);
  playerOneStore = inject(PlayerOneStore);
  playerTwoStore = inject(PlayerTwoStore);

  private secondairePlayerOne = new FormControl<'Fixe' | 'Tactique'>(
    'Tactique',
  );
  private secondairePlayerTwo = new FormControl<'Fixe' | 'Tactique'>(
    'Tactique',
  );

  private attName: FormControl = new FormControl('');
  private defName: FormControl = new FormControl('');

  protected defFaction: FormControl = new FormControl<number | null>(null);
  protected attFaction: FormControl = new FormControl<number | null>(null);

  playerOneForm = new FormGroup({
    name: this.attName,
    factionId: this.attFaction,
    secondaire: this.secondairePlayerOne,
  });

  playerTwoForm = new FormGroup({
    name: this.defName,
    factionId: this.defFaction,
    secondaire: this.secondairePlayerTwo,
  });

  constructor() {
    this.attName.valueChanges.subscribe((value) => {
      patchState(this.playerOneStore, { name: value });
    });
    this.attFaction.valueChanges.subscribe((value: number) => {
      patchState(this.playerOneStore, { factionId: +value });
    });
    this.secondairePlayerOne.valueChanges.subscribe((value) => {
      if (value) patchState(this.playerOneStore, { secondaire: value });
    });

    this.defName.valueChanges.subscribe((value) => {
      patchState(this.playerTwoStore, { name: value });
    });
    this.defFaction.valueChanges.subscribe((value: number) => {
      patchState(this.playerTwoStore, { factionId: +value });
    });

    this.secondairePlayerTwo.valueChanges.subscribe((value) => {
      if (value) patchState(this.playerTwoStore, { secondaire: value });
    });
  }
}
