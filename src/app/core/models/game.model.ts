import { RoundScore } from '@core/models/round-score.model';
import { Faction } from '@core/models/faction.model';

export const DEF_PLAYER = 0;
export const ATT_PLAYER = 1;

interface ConstructorParams {
  attName: string;
  defName: string;
  attFaction: Faction;
  defFaction: Faction;
}

export class Game {
  private _roundScores: Array<[RoundScore, RoundScore]> = new Array(5);
  playerNames: [string, string] = ['', ''];
  playerFactions: [Faction | undefined, Faction | undefined] = [
    undefined,
    undefined,
  ];
  constructor();
  constructor(params: ConstructorParams);

  constructor(params?: ConstructorParams | undefined) {
    const { attName = '', defName = '', attFaction, defFaction } = params || {};
    this.playerNames[ATT_PLAYER] = attName;
    this.playerNames[DEF_PLAYER] = defName;
    this.playerFactions[ATT_PLAYER] = attFaction;
    this.playerFactions[DEF_PLAYER] = defFaction;
  }

  get roundScores() {
    return this._roundScores;
  }

  set roundScores(value: Array<[RoundScore, RoundScore]>) {
    this._roundScores = value;
  }

  setAttackerName(name: string) {
    this.playerNames[ATT_PLAYER] = name;
  }

  getAttackerName() {
    return this.playerNames[ATT_PLAYER];
  }

  setDefenderName(name: string) {
    this.playerNames[DEF_PLAYER] = name;
  }

  getDefenderName() {
    return this.playerNames[DEF_PLAYER];
  }

  setAttackerFaction(faction: Faction) {
    this.playerFactions[ATT_PLAYER] = faction;
  }

  getAttackerFaction() {
    return this.playerFactions[ATT_PLAYER];
  }

  setDefenderFaction(faction: Faction) {
    this.playerFactions[DEF_PLAYER] = faction;
  }

  getDefenderFaction() {
    return this.playerFactions[DEF_PLAYER];
  }
}
