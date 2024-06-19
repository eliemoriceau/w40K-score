import { Component, Input, input, output } from '@angular/core';
import { Faction } from '@core/models';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-faction-selector',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './faction-selector.component.html',
  styleUrl: './faction-selector.component.css',
})
export class FactionSelectorComponent {
  factions = input.required<Faction[]>();
  @Input() control!: FormControl;
  change = output<number>();

  onFactionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedFactionId = +selectElement.value;
    const selectedFaction = this.factions().find(
      (faction) => faction.id === selectedFactionId,
    );
    if (!selectedFaction) {
      return;
    }
    this.change.emit(selectedFactionId);
  }
}
