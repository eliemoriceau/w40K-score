import { type ComponentFixture, TestBed } from "@angular/core/testing";

import type { ComponentRef } from "@angular/core";
import { SecondaryObjectifMockAdapter } from "@core/adapters/mock/SecondaryObjectifMock.adapter";
import { SecondaryObjectifGateway } from "@core/ports/secondaryObjectif.gateway";
import { PlayerGameComponent } from "./player-game.component";

describe("PlayerGameComponent", () => {
	let component: PlayerGameComponent;
	let componentRef: ComponentRef<PlayerGameComponent>;
	let fixture: ComponentFixture<PlayerGameComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PlayerGameComponent],
			providers: [
				{
					provide: SecondaryObjectifGateway,
					useClass: SecondaryObjectifMockAdapter,
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(PlayerGameComponent);
		component = fixture.componentInstance;
		componentRef = fixture.componentRef;
		fixture.detectChanges();
	});

	it("should create", () => {
		componentRef.setInput("playerName", "player1");
		expect(component).toBeTruthy();
	});
});
