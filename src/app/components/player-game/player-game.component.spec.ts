import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGameComponent } from './player-game.component';
import { SecondaryObjectifGateway } from '@core/ports/secondaryObjectif.gateway';
import { SecondaryObjectifMockAdapter } from '@core/adapters/mock/SecondaryObjectifMock.adapter';

describe('PlayerGameComponent', () => {
  let component: PlayerGameComponent;
  let fixture: ComponentFixture<PlayerGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerGameComponent],
      providers: [
        {
          provide: SecondaryObjectifGateway,
          useClass: SecondaryObjectifMockAdapter,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
