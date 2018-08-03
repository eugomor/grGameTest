import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BetSlipComponent } from './bet-slip.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetSlipComponent
    ],
      schemas: [ NO_ERRORS_SCHEMA ],
      //imports:[ RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(BetSlipComponent);
    //component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
