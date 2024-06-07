import { Component } from '@angular/core';
import { FactionSelectorComponent } from '@app/components/faction-selector/faction-selector.component';

@Component({
  selector: 'app-modal-pre-game',
  standalone: true,
  imports: [FactionSelectorComponent],
  templateUrl: './modal-pre-game.component.html',
  styleUrl: './modal-pre-game.component.css',
})
export class ModalPreGameComponent {}
