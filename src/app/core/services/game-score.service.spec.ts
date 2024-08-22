import { TestBed } from '@angular/core/testing';
import { GameScoreService } from './game-score.service';

describe('GameScoreService', () => {
  let service: GameScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add player to playersRoundScores', () => {
    const playerName = 'player';
    service.addPlayer(playerName);
    expect(service.playersRoundScores.has(playerName)).toBeTruthy();
  });

  it('should return roundScore of player', () => {
    const player = 'player';
    const roundNumber = 1;
    const roundScore = service.getRoundScore(player, roundNumber);
    expect(roundScore).toBeTruthy();
  });
});
