import { SecondaryObjectif } from '@core/models/secondaryObjectif.model';

interface RoundConstructor {
  roundNumber: number;
  primaryScore: number;
  firstSecondaryScore: number;
  secondeSecondaryScore: number;
  firstSecondaryObjectif?: SecondaryObjectif;
  secondeSecondaryObjectif?: SecondaryObjectif;
}

export class Round {
  roundNumber: number;
  primaryScore: number;
  firstSecondaryScore: number;
  secondeSecondaryScore: number;
  firstSecondaryObjectif: SecondaryObjectif | undefined;
  secondeSecondaryObjectif: SecondaryObjectif | undefined;

  constructor({
    roundNumber,
    primaryScore,
    firstSecondaryScore,
    secondeSecondaryScore,
    firstSecondaryObjectif,
    secondeSecondaryObjectif,
  }: RoundConstructor) {
    this.roundNumber = roundNumber;
    this.primaryScore = primaryScore;
    this.firstSecondaryScore = firstSecondaryScore;
    this.secondeSecondaryScore = secondeSecondaryScore;
    this.firstSecondaryObjectif = firstSecondaryObjectif;
    this.secondeSecondaryObjectif = secondeSecondaryObjectif;
  }

  get totalScore() {
    return (
      this.primaryScore + this.firstSecondaryScore + this.secondeSecondaryScore
    );
  }
}
