import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySelectorComponent } from './secondary-selector.component';

describe('SecondarySelectorComponent', () => {
  let component: SecondarySelectorComponent;
  let fixture: ComponentFixture<SecondarySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondarySelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondarySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
