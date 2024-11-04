import { Component, inject } from "@angular/core";
import { FactionSelectorComponent } from "@app/components/faction-selector/faction-selector.component";
import { GameComponent } from "@app/components/game/game.component";
import { ModalPreGameComponent } from "@app/components/modal-pre-game/modal-pre-game.component";
import { SecondaryObjectifService } from "@app/core/services/secondaryObjectif.service";
import { FactionsService } from "@core/services/factions.service";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [ModalPreGameComponent, FactionSelectorComponent, GameComponent],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export default class HomeComponent {
	factionService = inject(FactionsService);
	secondaryObjectifService = inject(SecondaryObjectifService);
}
