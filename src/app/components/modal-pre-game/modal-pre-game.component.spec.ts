import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPreGameComponent } from './modal-pre-game.component';

describe('ModalPreGameComponent', () => {
  let component: ModalPreGameComponent;
  let fixture: ComponentFixture<ModalPreGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPreGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPreGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
