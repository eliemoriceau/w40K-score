import { NgClass } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { FactionSelectorComponent } from "@app/components/faction-selector/faction-selector.component";
import { RoundService } from "@app/core/services/round.service";
import { FactionsService } from "@core/services/factions.service";
import { PlayerOneStore } from "@core/store/player-one.store";
import { PlayerTwoStore } from "@core/store/player-two.store";

@Component({
	selector: "app-modal-pre-game",
	standalone: true,
	imports: [
		FactionSelectorComponent,
		ReactiveFormsModule,
		FormsModule,
		NgClass,
	],
	templateUrl: "./modal-pre-game.component.html",
	styleUrl: "./modal-pre-game.component.css",
})
export class ModalPreGameComponent {
	factionService = inject(FactionsService);
	roundsService = inject(RoundService);
	playerOneStore = inject(PlayerOneStore);
	playerTwoStore = inject(PlayerTwoStore);

	private secondairePlayerOne = new FormControl<"Fixe" | "Tactique">(
		"Tactique",
	);
	private secondairePlayerTwo = new FormControl<"Fixe" | "Tactique">(
		"Tactique",
	);

	private attName: FormControl = new FormControl("", [Validators.required]);
	private defName: FormControl = new FormControl("", [Validators.required]);

	protected defFaction: FormControl = new FormControl<number | null>(null, [
		Validators.required,
	]);
	protected attFaction: FormControl = new FormControl<number | null>(null, [
		Validators.required,
	]);

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
			this.playerOneStore.update({ name: value });
		});
		this.attFaction.valueChanges.subscribe((value: number) => {
			this.playerOneStore.update({ factionId: +value });
		});
		this.secondairePlayerOne.valueChanges.subscribe((value) => {
			if (value) this.playerOneStore.update({ secondaire: value });
		});

		this.defName.valueChanges.subscribe((value) => {
			this.playerTwoStore.update({ name: value });
		});
		this.defFaction.valueChanges.subscribe((value: number) => {
			this.playerTwoStore.update({ factionId: +value });
		});

		this.secondairePlayerTwo.valueChanges.subscribe((value) => {
			if (value) this.playerTwoStore.update({ secondaire: value });
		});
	}

	startGame() {
		this.roundsService.addPlayer(this.playerOneStore.name());
		this.roundsService.addPlayer(this.playerTwoStore.name());
		this.playerOneForm.reset();
		this.playerTwoForm.reset();
		console.log(this.roundsService.roundsGame);
	}
}
