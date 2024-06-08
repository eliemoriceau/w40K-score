import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreGameComponent } from './modal-pre-game.component';
import { factionsMock } from '@mocks/faction.mock';
import { Game } from '@core/models/game.model';

describe('ModalPreGameComponent', () => {
  let component: ModalPreGameComponent;
  let fixture: ComponentFixture<ModalPreGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPreGameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPreGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validateGame', () => {
    const attName = 'attName';
    const defName = 'defName';
    const attFaction = factionsMock[0];
    const defFaction = factionsMock[1];

    component.attName.setValue(attName);
    component.defName.setValue(defName);
    component.attFaction.setValue(attFaction);
    component.defFaction.setValue(defFaction);

    const res: Game | undefined = component.validateGame();

    expect(res).toBeDefined();
    expect(res?.getAttackerFaction()).toEqual(attFaction);
    expect(res?.getDefenderFaction()).toEqual(defFaction);
    expect(res?.getAttackerName()).toEqual(attName);
    expect(res?.getDefenderName()).toEqual(defName);
  });
});
