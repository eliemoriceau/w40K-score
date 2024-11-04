import { Component, type OnInit, computed, inject, model } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import type { SecondaryObjectif } from "@core/models/secondaryObjectif.model";
import { SecondaryObjectifGateway } from "@core/ports/secondaryObjectif.gateway";
import { SecondaryObjectifService } from "@core/services/secondaryObjectif.service";

@Component({
	selector: "app-secondary-selector",
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: "./secondary-selector.component.html",
	styleUrl: "./secondary-selector.component.css",
})
export class SecondarySelectorComponent implements OnInit {
	secondaryObjectifService = inject(SecondaryObjectifService);
	gateway = inject(SecondaryObjectifGateway);

	secondaryList = computed(() => {
		return this.secondaryObjectifService.secondaryObjectifList();
	});
	selectedSecondary = model<SecondaryObjectif>();

	async ngOnInit() {
		const secondaryList = await this.gateway.getAllSecondaryObjectif();
		const service = this.secondaryObjectifService.secondaryObjectifList();
	}
}
