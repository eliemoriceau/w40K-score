import { Component, computed, input, signal } from '@angular/core';
import { SecondarySelectorComponent } from '@app/components/secondary-selector/secondary-selector.component';
import { SecondaryObjectif } from '@core/models/secondaryObjectif.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-round',
  standalone: true,
  imports: [SecondarySelectorComponent, FormsModule],
  templateUrl: './round.component.html',
  styleUrl: './round.component.css',
})
export class RoundComponent {
  roundNumber = input.required<number>();
  primaryScore = signal<number>(0);
  firstSecondaryScore = signal<number>(0);
  secondeSecondaryScore = signal<number>(0);

  firstSecondaryObjectif = signal<SecondaryObjectif | undefined>(undefined);
  secondeSecondaryObjectif = signal<SecondaryObjectif | undefined>(undefined);
  totalScore = computed(
    () =>
      this.primaryScore() +
      this.firstSecondaryScore() +
      this.secondeSecondaryScore(),
  );

  protected readonly Event = Event;
}
