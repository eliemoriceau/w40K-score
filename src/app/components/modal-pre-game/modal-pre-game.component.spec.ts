import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreGameComponent } from './modal-pre-game.component';
import { FactionGateway } from '@core/ports';
import { FactionsService } from '@app/core/services/factions.service';

describe('ModalPreGameComponent', () => {
  let component: ModalPreGameComponent;
  let fixture: ComponentFixture<ModalPreGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPreGameComponent],
      providers: [
        FactionsService,
        {
          provide: FactionGateway,
          useValue: { getFactions: jasmine.createSpy('getFactions') },
        }, // Mock FactionGateway
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPreGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validateGame', () => {});
});
