import { Injectable, signal, WritableSignal } from '@angular/core';
import { Round } from '@core/models/round.model';

@Injectable({
  providedIn: 'root',
})
export class GameScoreService {
  playersRoundScores = new Map<string, Map<number, WritableSignal<Round>>>();

  constructor() {}

  addPlayer(playerName: string) {
    if (!this.playersRoundScores.has(playerName)) {
      this.playersRoundScores.set(
        playerName,
        new Map<number, WritableSignal<Round>>(),
      );
    }
  }

  getRoundScore(playerName: string, roundNumber: number) {
    if (!this.playersRoundScores.has(playerName)) {
      this.playersRoundScores.set(playerName, new Map());
    }
    const playerRoundScores = this.playersRoundScores.get(playerName);
    if (!playerRoundScores?.has(roundNumber)) {
      playerRoundScores!.set(
        roundNumber,
        signal(
          new Round({
            firstSecondaryScore: 0,
            primaryScore: 0,
            roundNumber: 0,
            secondeSecondaryScore: 0,
          }),
        ),
      );
    }
    return playerRoundScores!.get(roundNumber);
  }
}
