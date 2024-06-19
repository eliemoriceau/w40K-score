import { signalStore, withState } from '@ngrx/signals';
import { PlayerState } from '@core/store/player-one.store';

const initialState: PlayerState = {
  name: 'Player Two',
  factionId: null,
  secondaire: 'Tactique',
};

export const PlayerTwoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
);
