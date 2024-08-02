import { inject, Injectable, OnInit, signal } from '@angular/core';
import { SecondaryObjectif } from '@core/models/secondaryObjectif.model';
import { SecondaryObjectifGateway } from '@core/ports/secondaryObjectif.gateway';

@Injectable({
  providedIn: 'root',
})
export class SecondaryObjectifService implements OnInit {
  secondaryObjectifList = signal<SecondaryObjectif[]>([]);
  secondaryObjectifGateway = inject(SecondaryObjectifGateway);

  constructor() {
    this.refresh();
  }

  async ngOnInit() {
    this.secondaryObjectifList.set(
      await this.secondaryObjectifGateway.getAllSecondaryObjectif(),
    );
    console.log('SecondaryObjectif:', this.secondaryObjectifList());
  }

  async refresh() {
    this.secondaryObjectifList.set(
      await this.secondaryObjectifGateway.getAllSecondaryObjectif(),
    );
    console.log('SecondaryObjectif refresh:', this.secondaryObjectifList());
  }
}
