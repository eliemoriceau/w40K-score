import { Component, signal } from '@angular/core';
import { RoundComponent } from '@app/components/round/round.component';

@Component({
  selector: 'app-player-game',
  standalone: true,
  imports: [RoundComponent],
  templateUrl: './player-game.component.html',
  styleUrl: './player-game.component.css',
})
export class PlayerGameComponent {
  rounds = new Array(5);
  totalPlayerScore = signal<number>(0);
}
