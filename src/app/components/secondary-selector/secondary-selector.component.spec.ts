import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySelectorComponent } from './secondary-selector.component';
import { SecondaryObjectifService } from '@core/services/secondaryObjectif.service';
import { SecondaryObjectifGateway } from '@core/ports/secondaryObjectif.gateway';
import { SecondaryObjectifMockAdapter } from '@core/adapters/mock/SecondaryObjectifMock.adapter';

describe('SecondarySelectorComponent', () => {
  let component: SecondarySelectorComponent;
  let fixture: ComponentFixture<SecondarySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondarySelectorComponent],
      providers: [
        SecondaryObjectifService,
        {
          provide: SecondaryObjectifGateway,
          useValue: SecondaryObjectifMockAdapter,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondarySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
