import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RoundComponent} from './round.component';
import {SecondaryObjectifGateway} from "@core/ports/secondaryObjectif.gateway";
import {SecondaryObjectifMockAdapter} from "@core/adapters/mock/SecondaryObjectifMock.adapter";

describe('RoundComponent', () => {
  let component: RoundComponent;
  let componentRef
  let fixture: ComponentFixture<RoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundComponent],
      providers: [{
        provide: SecondaryObjectifGateway,
        useClass: SecondaryObjectifMockAdapter
      }],
    }).compileComponents();

    fixture = TestBed.createComponent(RoundComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef
    componentRef.setInput('roundNumber', 1)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
