import { Component, input, output } from '@angular/core';
import { Faction } from '@core/models';

@Component({
  selector: 'app-faction-selector',
  standalone: true,
  imports: [],
  templateUrl: './faction-selector.component.html',
  styleUrl: './faction-selector.component.css',
})
export class FactionSelectorComponent {
  factions = input.required<Faction[]>();
  selectedFaction = input.required<Faction | undefined>();
  change = output<Faction>();

  onFactionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedFactionId = +selectElement.value;
    const selectedFaction = this.factions().find(
      (faction) => faction.id === selectedFactionId,
    );
    if (!selectedFaction) {
      return;
    }
    this.change.emit(selectedFaction);
  }
}
