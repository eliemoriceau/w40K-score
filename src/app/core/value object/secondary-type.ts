export class SecondaryType {
	private readonly value: "Fixed" | "Tactical";

	constructor(value: "Fixed" | "Tactical") {
		if (value !== "Fixed" && value !== "Tactical") {
			throw new Error("Invalid value for SecondaryType");
		}
		this.value = value;
	}

	getValue(): "Fixed" | "Tactical" {
		return this.value;
	}
}
