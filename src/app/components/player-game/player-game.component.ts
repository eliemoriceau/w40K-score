import { Component, computed, inject, input, signal } from "@angular/core";
import { RoundComponent } from "@app/components/round/round.component";
import { RoundService } from "@core/services/round.service";

@Component({
	selector: "app-player-game",
	standalone: true,
	imports: [RoundComponent],
	templateUrl: "./player-game.component.html",
	styleUrl: "./player-game.component.css",
})
export class PlayerGameComponent {
	playerName = input.required<string>();
	roundsService = inject(RoundService);
	roundsPlayer = computed(() =>
		this.roundsService
			.getPlayerRound(this.playerName())
			?.sort((a, b) => a.roundNumber - b.roundNumber),
	);

	totalPlayerScore = signal<number>(0);
}
