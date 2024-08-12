import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FactionGateway } from '@core/ports';
import { FactionsService } from '@core/services/factions.service';
import { FactionMockAdapter } from '@core/adapters/mock/factionMock.adapter';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        FactionsService,
        {
          provide: FactionGateway,
          useValue: FactionMockAdapter,
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'score' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('score');
  });
});
