import { TestBed } from "@angular/core/testing";

import { Round } from "@core/models/round.model";
import { RoundService } from "./round.service";

describe("RoundService", () => {
	let service: RoundService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(RoundService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("should have a rounds property by player", () => {
		expect(service.roundsGame).toBeInstanceOf(Map);
	});

	it("should have a name player as key", () => {
		service.addPlayer("player1");
		expect(service.roundsGame.has("player1")).toBeTrue();
	});

	it("should be new player add with 5 rounds", () => {
		service.addPlayer("player1");
		expect(service.roundsGame.get("player1")?.length).toEqual(5);
	});

	it("should be return a player round", () => {
		service.addPlayer("player1");
		service.addPlayer("player2");
		expect(service.getPlayerRound("player1")).toBeInstanceOf(Array);
	});

	it("should be update round score", () => {
		service.addPlayer("player1");
		const newRound = new Round({
			roundNumber: 4,
			primaryScore: 10,
			firstSecondaryScore: 5,
			secondeSecondaryScore: 5,
		});
		service.updateRound("player1", newRound);

		const result = service
			.getPlayerRound("player1")
			?.find((round) => round.roundNumber === 4);
		expect(result).toBeInstanceOf(Round);
		expect(result?.primaryScore).toEqual(10);
		expect(result?.firstSecondaryScore).toEqual(5);
		expect(result?.secondeSecondaryScore).toEqual(5);
	});
});
