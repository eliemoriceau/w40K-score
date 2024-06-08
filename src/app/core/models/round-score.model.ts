export class RoundScore {
  private _primaire: number = 0;
  private _secondaire: number = 0;

  get primaire(): number {
    return this._primaire;
  }

  set primaire(value: number) {
    this._primaire = value;
  }

  get secondaire(): number {
    return this._secondaire;
  }

  set secondaire(value: number) {
    this._secondaire = value;
  }

  get total(): number {
    return this._primaire + this._secondaire;
  }
}
