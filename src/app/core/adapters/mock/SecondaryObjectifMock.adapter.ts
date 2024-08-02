import { SecondaryObjectifGateway } from '@core/ports/secondaryObjectif.gateway';
import { SecondaryObjectif } from '@core/models/secondaryObjectif.model';
import vine from '@vinejs/vine';
import { secondaryObjectifSchema } from '@core/schema/secondaryObjectif.schema';

export class SecondaryObjectifMockAdapter implements SecondaryObjectifGateway {
  private secondaryObjectifList: SecondaryObjectif[] = [
    {
      id: '1',
      name: 'assasinat',
    },
    { id: '2', name: 'abatter les' },
  ];

  async getAllSecondaryObjectif(): Promise<SecondaryObjectif[]> {
    return vine.validate({
      schema: vine.array(secondaryObjectifSchema),
      data: this.secondaryObjectifList,
    });
  }

  getSecondaryObjectifById(id: string): Promise<SecondaryObjectif | null> {
    const secondaryObjectif = this.secondaryObjectifList.find(
      (secondaryObjectif) => secondaryObjectif.id === id,
    );

    return Promise.resolve(
      secondaryObjectif !== undefined ? secondaryObjectif : null,
    );
  }
}
