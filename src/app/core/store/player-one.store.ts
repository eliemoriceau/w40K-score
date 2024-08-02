import { signalStore, withMethods, withState } from '@ngrx/signals';

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
  withMethods((store) => ({
    toObject(): PlayerState {
      return {
        factionId: store.factionId(),
        name: store.name(),
        secondaire: store.secondaire(),
      };
    },
  })),
);
