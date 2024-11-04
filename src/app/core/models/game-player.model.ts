import type { Faction } from "@core/models/faction.model";
import type { User } from "@core/models/user.model";
import { SecondaryType } from "@core/value object/secondary-type";

export class GamePlayer {
	player: User;
	faction: Faction | null;
	secondaryType: SecondaryType;

	constructor(
		player: User,
		faction: Faction | null,
		secondary: "Fixed" | "Tactical",
	) {
		this.player = player;
		this.faction = faction;
		this.secondaryType = new SecondaryType(secondary);
	}
}
