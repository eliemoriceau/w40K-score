import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GamePlayerInfoComponent} from './game-player-info.component';
import {PlayerState} from "@core/store/player-one.store";

describe('GamePlayerInfoComponent', () => {
  let component: GamePlayerInfoComponent;
  let componentRef
  let fixture: ComponentFixture<GamePlayerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamePlayerInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamePlayerInfoComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef
    componentRef.setInput('faction', [])
    componentRef.setInput('player', {factionId: 1, name: 'player One', secondaire: 'Tactique'} as PlayerState)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
