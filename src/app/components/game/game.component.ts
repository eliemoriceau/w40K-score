import { Component, computed, inject } from "@angular/core";
import { GamePlayerInfoComponent } from "@app/components/game-player-info/game-player-info.component";
import { PlayerGameComponent } from "@app/components/player-game/player-game.component";
import { PlayerTwoStore } from "@app/core/store/player-two.store";
import { FactionsService } from "@core/services/factions.service";
import { PlayerOneStore } from "@core/store/player-one.store";

@Component({
	selector: "app-game",
	standalone: true,
	imports: [PlayerGameComponent, GamePlayerInfoComponent],
	templateUrl: "./game.component.html",
	styleUrl: "./game.component.css",
})
export class GameComponent {
	readonly playerOneStore = inject(PlayerOneStore);
	readonly playerTwoStore = inject(PlayerTwoStore);
	faction = inject(FactionsService).factions;
	readonly playerOneName = computed(() => this.playerOneStore.name());
	readonly playerTwoName = computed(() => this.playerTwoStore.name());
}
