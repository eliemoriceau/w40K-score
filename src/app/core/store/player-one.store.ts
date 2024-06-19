import { signalStore, withState } from '@ngrx/signals';
import { Faction } from '@core/models';

export type PlayerState = {
  name: string;
  factionId: number | null;
  secondaire: 'Fixe' | 'Tactique';
};

const initialState: PlayerState = {
  name: 'Player One',
  factionId: null,
  secondaire: 'Tactique',
};

export const PlayerOneStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
);
