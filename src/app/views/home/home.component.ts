import { Component, inject, OnInit } from '@angular/core';
import { ModalPreGameComponent } from '@app/components/modal-pre-game/modal-pre-game.component';
import { FactionSelectorComponent } from '@app/components/faction-selector/faction-selector.component';
import { FactionsService } from '@core/services/factions.service';
import { GameComponent } from '@app/components/game/game.component';
import { SecondaryObjectifService } from '@app/core/services/secondaryObjectif.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModalPreGameComponent, FactionSelectorComponent, GameComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent implements OnInit {
  factionService = inject(FactionsService);
  secondaryObjectifService = inject(SecondaryObjectifService);

  ngOnInit(): void {
    console.log(this.factionService.factions());
    console.log(this.secondaryObjectifService.secondaryObjectifList());
  }
}
