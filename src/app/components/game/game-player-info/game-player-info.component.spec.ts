import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayerInfoComponent } from './game-player-info.component';

describe('GamePlayerInfoComponent', () => {
  let component: GamePlayerInfoComponent;
  let fixture: ComponentFixture<GamePlayerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamePlayerInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GamePlayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
