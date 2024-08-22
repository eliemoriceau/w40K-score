import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { PlayerState } from '@core/store/player-one.store';

const initialState: PlayerState = {
  name: 'Player Two',
  factionId: null,
  secondaire: 'Tactique',
};

export const PlayerTwoStore = signalStore(
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
    update(update: Partial<PlayerState>): void {
      patchState(store, update);
    },
  })),
);
