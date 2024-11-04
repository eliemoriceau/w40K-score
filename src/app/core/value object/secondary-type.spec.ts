import { SecondaryType } from "@core/value object/secondary-type";

describe("SecondaryType", () => {
	it("should be return value", () => {
		const secondaryType = new SecondaryType("Fixed");
		expect(secondaryType.getValue()).toEqual("Fixed");
	});
});
