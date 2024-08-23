import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FactionSelectorComponent} from './faction-selector.component';
import {FormControl} from "@angular/forms";

describe('FactionSelectorComponent', () => {
  let component: FactionSelectorComponent;
  let componentRef
  let fixture: ComponentFixture<FactionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactionSelectorComponent],
      providers: [],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactionSelectorComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef
    componentRef.setInput('factions', [])
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
