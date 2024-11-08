import {ComponentFixture, TestBed} from '@angular/core/testing';
import HomeComponent from '@app/views/home/home.component';
import {FactionGateway} from '@core/ports';
import {FactionMockAdapter} from '@core/adapters/mock/factionMock.adapter';
import {SecondaryObjectifGateway} from "@core/ports/secondaryObjectif.gateway";
import {SecondaryObjectifMockAdapter} from "@core/adapters/mock/SecondaryObjectifMock.adapter";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        {
          provide: FactionGateway,
          useClass: FactionMockAdapter,
        },
        {
          provide: SecondaryObjectifGateway,
          useClass: SecondaryObjectifMockAdapter
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
