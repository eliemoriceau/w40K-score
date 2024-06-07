import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionSelectorComponent } from './faction-selector.component';

describe('FactionSelectorComponent', () => {
  let component: FactionSelectorComponent;
  let fixture: ComponentFixture<FactionSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactionSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
