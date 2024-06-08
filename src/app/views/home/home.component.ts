import { Component, inject, OnInit } from '@angular/core';
import { ModalPreGameComponent } from '@app/components/modal-pre-game/modal-pre-game.component';
import { FactionSelectorComponent } from '@app/components/faction-selector/faction-selector.component';
import { FactionsService } from '@core/services/factions.service';
import { Faction } from '@core/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModalPreGameComponent, FactionSelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent implements OnInit {
  factionService = inject(FactionsService);
  selectedFaction: Faction | undefined = undefined;

  ngOnInit(): void {
    console.log(this.factionService.factions());
  }
}
