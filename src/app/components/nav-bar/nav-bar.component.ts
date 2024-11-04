import { Component } from "@angular/core";
import { ModalPreGameComponent } from "../modal-pre-game/modal-pre-game.component";

@Component({
	selector: "app-nav-bar",
	standalone: true,
	imports: [ModalPreGameComponent],
	templateUrl: "./nav-bar.component.html",
	styleUrl: "./nav-bar.component.css",
})
export class NavBarComponent {
	newGame() {
		throw new Error("New Game Method not implemented.");
	}
}
