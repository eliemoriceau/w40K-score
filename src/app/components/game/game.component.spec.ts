import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { FactionsService } from '@core/services/factions.service';
import { FactionGateway } from '@core/ports';
import { FactionMockAdapter } from '@core/adapters/mock/factionMock.adapter';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameComponent],
      providers: [
        FactionsService,
        {
          provide: FactionGateway,
          useValue: FactionMockAdapter,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
