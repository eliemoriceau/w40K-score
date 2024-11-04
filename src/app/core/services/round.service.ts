import { Injectable } from "@angular/core";
import { Round } from "@core/models/round.model";

@Injectable({
	providedIn: "root",
})
export class RoundService {
	roundsGame = new Map<string, Round[]>();

	addPlayer(playerName: string) {
		const rounds: Round[] = new Array(5).fill(0).map(
			(_, index) =>
				new Round({
					roundNumber: index + 1,
					primaryScore: 0,
					firstSecondaryScore: 0,
					secondeSecondaryScore: 0,
				}),
		);
		this.roundsGame.set(playerName, rounds);
	}

	getPlayerRound(playerName: string) {
		return this.roundsGame.get(playerName);
	}

	updateRound(player: string, newRound: Round) {
		const playerRounds = this.roundsGame.get(player);
		if (!playerRounds) {
			throw new Error("Player not found");
		}
		const updatedRounds = playerRounds.map((round) =>
			round.roundNumber === newRound.roundNumber ? newRound : round,
		);
		this.roundsGame.set(player, updatedRounds);
	}
}
